import app from './config/express.js'
import { env, port } from './config/envs.js'
import logger from './config/logger.js'

// iniciando serviço
app.listen(port, () =>
    logger.info(`🍋🟢 Lemon API iniciada. Porta:${port} | Ambiente: ${env}`)
)

export default app
