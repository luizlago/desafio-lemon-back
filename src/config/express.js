import express from 'express'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import swagger from 'swagger-ui-express'
import swaggerDoc from './swagger.json' assert { type: 'json' }
import { apiPath } from './envs.js'

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Rotas
import clientRoutes from '../core/routes/clientRoutes.js'

// Instância do Express
const app = express()

// Parse para os parâmetros do body
app.use(express.json())

// x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Compressão gzip
app.use(compression())

// Logging
app.use(
    morgan(
        '### [:date] [:method :url] [:status] [:res[content-length]] - [:response-time ms] - [:remote-addr]',
        process.env.NODE_ENV
    )
)

// Configuração do rate limit
app.use(
    rateLimit({
        max: process.env.RATE_LIMIT_MAX,
        windowMs: process.env.RATE_LIMIT_WINDOW,
        message:
            'Você atingiu o limite de requisições, tente novamente mais tarde',
    })
)

// Montar rotas da API v1
app.use(`${apiPath}/cliente`, clientRoutes)

// Diretório publico para acesso de conteúdo estático
app.use('/public', express.static(`${__dirname}/../public`))

// Customizações visuais do Swagger
const swaggerOptions = {
    customSiteTitle: '🍋 Lemon Energy - Documentação API',
    customfavIcon: `../public/images/favicon.ico`,
    customCss: `
        .swagger-ui svg:not(:root), .topbar-wrapper span {
            display: none;
        }
        .topbar-wrapper .link {
            content: url('/public/images/logo.png');
        }
        .swagger-ui .topbar { 
            background-color: #008059; 
            border-bottom: 20px solid #ffffff; 
        }`,
}

// Rota para Documentação
app.use('/docs', swagger.serve, swagger.setup(swaggerDoc, swaggerOptions))

export default app
