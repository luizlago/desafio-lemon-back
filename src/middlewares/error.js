import { HttpCode } from '../constants/httpCodes'

// Handler de erros
const errorHandler = (err, req, res, next) => {
    return res
        .status(HttpCode.BAD_REQUEST)
        .json({ message: 'Falha na execução', err })
}

export default errorHandler
