import { validateOrFail as isValidCPF } from 'validation-br/dist/cpf.js'
import { validateOrFail as isValidCNPJ } from 'validation-br/dist/cnpj.js'
import Joi from 'joi'

const isCPF = (value, helper) => {
    try {
        isValidCPF(value)
        return value
    } catch (error) {
        return helper.message(error.message)
    }
}

const isCNPJ = (value, helper) => {
    try {
        isValidCNPJ(value)
        return value
    } catch (error) {
        return helper.message(error.message)
    }
}

const elegibility = Joi.object({
    numeroDoDocumento: Joi.alternatives()
        .try(Joi.string().custom(isCPF), Joi.string().custom(isCNPJ))
        .required()
        .messages({
            'alternatives.match':
                '"numeroDoDocumento" does not match "cpf" or "cnpj"',
            'any.required': '"numeroDoDocumento" is required',
        }),
    tipoDeConexao: Joi.string()
        .lowercase()
        .valid('monofasico', 'bifasico', 'trifasico')
        .required()
        .messages({
            'string.base': '"tipoDeConexao" should be a "string"',
            'string.empty': '"tipoDeConexao" cannot be an empty field',
            'any.required': '"tipoDeConexao" is required',
        }),
    classeDeConsumo: Joi.string()
        .lowercase()
        .valid(
            'residencial',
            'industrial',
            'comercial',
            'rural',
            'poderPublico'
        )
        .required()
        .messages({
            'string.base': '"classeDeConsumo" should be a "string"',
            'string.empty': '"classeDeConsumo" cannot be an empty field',
            'any.required': '"classeDeConsumo" is required',
        }),
    subClasseDeConsumo: Joi.string()
        .lowercase()
        .valid(
            'administracaocondominial',
            'agropecuariarural',
            'baixarenda',
            'comercial',
            'industrial',
            'poderpublicoestadual',
            'poderpublicomunicipal',
            'residencial',
            'servicosdetelecomunicacao',
            'servicosdetransporte',
            'templosreligiosos'
        )
        .required()
        .messages({
            'string.base': '"subClasseDeConsumo" should be a "string"',
            'string.empty': '"subClasseDeConsumo" cannot be an empty field',
            'any.required': '"subClasseDeConsumo" is required',
        }),
    modalidadeTarifaria: Joi.string()
        .lowercase()
        .valid('azul', 'branca', 'verde', 'convencional')
        .required()
        .messages({
            'string.base': '"modalidadeTarifaria" should be a "string"',
            'string.empty': '"modalidadeTarifaria" cannot be an empty field',
            'any.required': '"modalidadeTarifaria" is required',
        }),
    historicoDeConsumo: Joi.array()
        .required()
        .min(3)
        .max(12)
        .items(Joi.number().integer().max(9999).min(0)),
})

export default {
    elegibility,
}
