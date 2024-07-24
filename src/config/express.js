import express from 'express'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import { apiPath } from './envs.js'

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
app.use('/public', express.static('./../public'))

export default app
