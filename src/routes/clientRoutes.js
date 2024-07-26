import express from 'express'
import controller from '../controllers/clientController.js'
import schemaValidator from '../middlewares/schemaValidator.js'

const router = express.Router()

// Rota POST Elegibilidade
router.post(
    '/elegibilidade',
    schemaValidator('/elegibilidade'),
    controller.eligibility
)

export default router
