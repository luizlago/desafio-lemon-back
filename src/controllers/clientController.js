import { HttpCode } from '../constants/httpCodes.js'
import clientService from '../services/clientService.js'

// /cliente/elegibilidade
const eligibility = async (req, res, next) => {
    try {
        const eligibilityResult = clientService.verify(req.body)
        res.status(HttpCode.OK).json(eligibilityResult)
    } catch (e) {
        next(e)
    }
}

export default { eligibility }
