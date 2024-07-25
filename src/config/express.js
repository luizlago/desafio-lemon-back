import express from 'express'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import { apiPath } from './envs.js'

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Rotas
import clientRoutes from '../routes/clientRoutes.js'

// Middlewares
import { swaggerServe, swaggerSetup } from '../middlewares/swagger.js'
import errorHandler from '../middlewares/error.js'

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
// Handler de erros
app.use(errorHandler)

// Rotas API
app.use(`${apiPath}/cliente`, clientRoutes)

// Rota publica para acesso de conteúdo estático
app.use('/public', express.static(`${__dirname}/../public`))

// Rota de Documentação (Swagger)
app.use('/docs', swaggerServe, swaggerSetup)

export default app
