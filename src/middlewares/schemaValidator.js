import { HttpCode } from '../constants/httpCodes.js'
import schemas from '../schemas/index.js'

const validationOptions = {
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: false,
}

const schemaValidator = (path) => {
    const schema = schemas[path]

    if (!schema) {
        throw new Error(`Schema não encontrado - ${path}`)
    }

    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, validationOptions)

        if (error) {
            const joiError = {
                status: 'failed',
                error: {
                    original: error._original,
                    details: error.details.map(({ message, type }) => ({
                        message: message.replace(/['"]/g, ''),
                        type,
                    })),
                },
            }

            return res.status(HttpCode.UNPROCESSABLE_ENTITY).json(joiError)
        }

        // validação bem-sucedida
        req.body = value
        return next()
    }
}

export default schemaValidator
