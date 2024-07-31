import { jest, expect, describe, it } from '@jest/globals'
import input from './mock/input.js'
import schemaValidator from '../../middlewares/schemaValidator.js'
import { HttpCode } from '../../constants/httpCodes.js'

describe('Middleware de validação de schemas', () => {
    let req, res, next

    beforeEach(() => {
        req = { body: {} }
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }
        next = jest.fn()
    })

    it('segue com a requisição caso a validação for bem-sucedida', () => {
        // Supondo que você tenha um mock de input válido
        req.body = input.elegOk

        const middleware = schemaValidator('/elegibilidade')
        middleware(req, res, next)
        expect(next).toHaveBeenCalled()
        expect(res.status).not.toHaveBeenCalled()
        expect(res.json).not.toHaveBeenCalled()
    })

    it('retorna erro 422 se o numeroDoDocumento for inválido', () => {
        req.body = input.elegDoc

        const middleware = schemaValidator('/elegibilidade')
        middleware(req, res, next)

        expect(res.status).toHaveBeenCalledWith(HttpCode.UNPROCESSABLE_ENTITY)
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({
                status: 'failed',
                error: expect.objectContaining({
                    original: expect.any(Object),
                    details: expect.arrayContaining([
                        expect.objectContaining({
                            message:
                                expect.stringContaining('numeroDoDocumento'),
                            type: expect.any(String),
                        }),
                    ]),
                }),
            })
        )
        expect(next).not.toHaveBeenCalled()
    })

    it('retorna erro 422 se o tipoDeConexao for inválido', () => {
        req.body = input.elegConnection

        const middleware = schemaValidator('/elegibilidade')
        middleware(req, res, next)

        expect(res.status).toHaveBeenCalledWith(HttpCode.UNPROCESSABLE_ENTITY)
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({
                status: 'failed',
                error: expect.objectContaining({
                    original: expect.any(Object),
                    details: expect.arrayContaining([
                        expect.objectContaining({
                            message: expect.stringContaining('tipoDeConexao'),
                            type: expect.any(String),
                        }),
                    ]),
                }),
            })
        )
        expect(next).not.toHaveBeenCalled()
    })

    it('retorna erro 422 se o classeDeConsumo for inválido', () => {
        req.body = input.elegClass

        const middleware = schemaValidator('/elegibilidade')
        middleware(req, res, next)

        expect(res.status).toHaveBeenCalledWith(HttpCode.UNPROCESSABLE_ENTITY)
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({
                status: 'failed',
                error: expect.objectContaining({
                    original: expect.any(Object),
                    details: expect.arrayContaining([
                        expect.objectContaining({
                            message: expect.stringContaining('classeDeConsumo'),
                            type: expect.any(String),
                        }),
                    ]),
                }),
            })
        )
        expect(next).not.toHaveBeenCalled()
    })

    it('retorna erro 422 se o subClasseDeConsumo for inválido', () => {
        req.body = input.elegSubClass

        const middleware = schemaValidator('/elegibilidade')
        middleware(req, res, next)

        expect(res.status).toHaveBeenCalledWith(HttpCode.UNPROCESSABLE_ENTITY)
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({
                status: 'failed',
                error: expect.objectContaining({
                    original: expect.any(Object),
                    details: expect.arrayContaining([
                        expect.objectContaining({
                            message:
                                expect.stringContaining('subClasseDeConsumo'),
                            type: expect.any(String),
                        }),
                    ]),
                }),
            })
        )
        expect(next).not.toHaveBeenCalled()
    })

    it('retorna erro 422 se o modalidadeTarifaria for inválido', () => {
        req.body = input.elegModality

        const middleware = schemaValidator('/elegibilidade')
        middleware(req, res, next)

        expect(res.status).toHaveBeenCalledWith(HttpCode.UNPROCESSABLE_ENTITY)
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({
                status: 'failed',
                error: expect.objectContaining({
                    original: expect.any(Object),
                    details: expect.arrayContaining([
                        expect.objectContaining({
                            message: expect.stringContaining(
                                'modalidadeTarifaria'
                            ),
                            type: expect.any(String),
                        }),
                    ]),
                }),
            })
        )
        expect(next).not.toHaveBeenCalled()
    })

    it('retorna erro 422 se o historicoDeConsumo for inválido', () => {
        req.body = input.elegHistory

        const middleware = schemaValidator('/elegibilidade')
        middleware(req, res, next)

        expect(res.status).toHaveBeenCalledWith(HttpCode.UNPROCESSABLE_ENTITY)
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({
                status: 'failed',
                error: expect.objectContaining({
                    original: expect.any(Object),
                    details: expect.arrayContaining([
                        expect.objectContaining({
                            message:
                                expect.stringContaining('historicoDeConsumo'),
                            type: expect.any(String),
                        }),
                    ]),
                }),
            })
        )
        expect(next).not.toHaveBeenCalled()
    })

    it('schema não for encontrado', () => {
        const invalidPath = '/caminho/invalido'
        expect(() => schemaValidator(invalidPath)).toThrow(
            `Schema não encontrado - ${invalidPath}`
        )
    })
})
