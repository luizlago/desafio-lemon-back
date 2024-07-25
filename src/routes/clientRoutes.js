import express from 'express'
import controller from '../controllers/clientController.js'

const router = express.Router()

// Rota POST Elegibilidade
router.post('/elegibilidade', controller.eligibility)

export default router
