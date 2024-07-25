import app from './config/express.js'
import { env, port } from './config/envs.js'

// iniciando serviço
app.listen(port, () =>
    console.log(`🍋🟢 Lemon API iniciada. Porta:${port} | Ambiente: ${env}`)
)

export default app
