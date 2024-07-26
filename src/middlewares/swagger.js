import swagger from 'swagger-ui-express'
import yaml from 'yamljs'
import path from 'path'
import { fileURLToPath } from 'url'
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

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const swaggerDoc = yaml.load(`${__dirname}/../config/swagger.yaml`)

export const swaggerServe = swagger.serve
export const swaggerSetup = swagger.setup(swaggerDoc, swaggerOptions)
