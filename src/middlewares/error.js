import { HttpCode } from '../constants/httpCodes.js'

// Handler de erros
const errorHandler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        return res.status(HttpCode.BAD_REQUEST).json({ error: err.message })
    }
    return res
        .status(HttpCode.INTERNAL_SERVER_ERROR)
        .json({ message: 'Falha na execução', err })
}

export default errorHandler
