import swagger from 'swagger-ui-express'
import swaggerDoc from '../config/swagger.json' assert { type: 'json' }

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

export const swaggerServe = swagger.serve
export const swaggerSetup = swagger.setup(swaggerDoc, swaggerOptions)
