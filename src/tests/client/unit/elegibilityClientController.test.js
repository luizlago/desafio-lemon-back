import { jest } from '@jest/globals'

import clientController from '../../../controllers/clientController.js'
import clientService from '../../../services/clientService.js'
import output from '../mock/output.js'
import input from '../mock/input.js'
import { HttpCode } from '../../../constants/httpCodes.js'

describe('Controller de rotas cliente', () => {
    let req, res, next

    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }
        req = {}
        next = jest.fn()
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    describe('cliente é elegível', () => {
        beforeEach(async () => {
            jest.spyOn(clientService, 'verify').mockReturnValue(
                output.resElegOk
            )
            req.body = input.elegOk
            await clientController.eligibility(req, res, next)
        })

        it('statusCode 200', () => {
            expect(res.status).toHaveBeenCalledWith(HttpCode.OK)
        })

        it('Payload JSON OK', () => {
            expect(res.json).toHaveBeenCalledWith(output.resElegOk)
        })
    })

    describe('cliente não é elegível', () => {
        describe('quando a classe  de consumo é inválida', () => {
            beforeEach(async () => {
                jest.spyOn(clientService, 'verify').mockReturnValue(
                    output.resElegClass
                )
                req.body = input.elegClass
                await clientController.eligibility(req, res, next)
            })

            it('statusCode 200', () => {
                expect(res.status).toHaveBeenCalledWith(HttpCode.OK)
            })

            it('Payload JSON classe inválida', () => {
                expect(res.json).toHaveBeenCalledWith(output.resElegClass)
            })
        })
        describe('quando a subClasse  de consumo é inválida', () => {
            beforeEach(async () => {
                jest.spyOn(clientService, 'verify').mockReturnValue(
                    output.resElegSubClass
                )
                req.body = input.elegSubClass
                await clientController.eligibility(req, res, next)
            })

            it('statusCode 200', () => {
                expect(res.status).toHaveBeenCalledWith(HttpCode.OK)
            })

            it('Payload JSON classe inválida', () => {
                expect(res.json).toHaveBeenCalledWith(output.resElegSubClass)
            })
        })
        describe('quando a modalidade tarifária é inválida', () => {
            beforeEach(async () => {
                jest.spyOn(clientService, 'verify').mockReturnValue(
                    output.resElegModality
                )
                req.body = input.elegModality
                await clientController.eligibility(req, res, next)
            })

            it('statusCode 200', () => {
                expect(res.status).toHaveBeenCalledWith(HttpCode.OK)
            })

            it('Payload JSON modalidade inválida', () => {
                expect(res.json).toHaveBeenCalledWith(output.resElegModality)
            })
        })
        describe('quando o consumo minimo está abaixo', () => {
            beforeEach(async () => {
                jest.spyOn(clientService, 'verify').mockReturnValue(
                    output.resElegLowConsumption
                )
                req.body = input.elegLowConsumption
                await clientController.eligibility(req, res, next)
            })

            it('statusCode 200', () => {
                expect(res.status).toHaveBeenCalledWith(HttpCode.OK)
            })

            it('Payload JSON consumo inválido', () => {
                expect(res.json).toHaveBeenCalledWith(
                    output.resElegLowConsumption
                )
            })
        })
        describe('quando a classe e a modalidade são invalidas', () => {
            beforeEach(async () => {
                jest.spyOn(clientService, 'verify').mockReturnValue(
                    output.resElegClassAndModality
                )
                req.body = input.elegClassAndModality
                await clientController.eligibility(req, res, next)
            })

            it('statusCode 200', () => {
                expect(res.status).toHaveBeenCalledWith(HttpCode.OK)
            })

            it('Payload JSON classe e modalidade inválidos', () => {
                expect(res.json).toHaveBeenCalledWith(
                    output.resElegClassAndModality
                )
            })
        })
        describe('quando a classe e o consumo são inválidos', () => {
            beforeEach(async () => {
                jest.spyOn(clientService, 'verify').mockReturnValue(
                    output.resElegLowConsumptionAndClass
                )
                req.body = input.elegLowConsumptionAndClass
                await clientController.eligibility(req, res, next)
            })
            it('statusCode 200', () => {
                expect(res.status).toHaveBeenCalledWith(HttpCode.OK)
            })

            it('Payload JSON classe e consumo inválidos', () => {
                expect(res.json).toHaveBeenCalledWith(
                    output.resElegLowConsumptionAndClass
                )
            })
        })
        describe('quando a modalidade e o consumo são inválidos', () => {
            beforeEach(async () => {
                jest.spyOn(clientService, 'verify').mockReturnValue(
                    output.resElegLowConsumptionAndModality
                )
                req.body = input.elegLowConsumptionAndModality
                await clientController.eligibility(req, res, next)
            })

            it('statusCode 200', () => {
                expect(res.status).toHaveBeenCalledWith(HttpCode.OK)
            })

            it('Payload JSON Modalidade e consumo inválidos', () => {
                expect(res.json).toHaveBeenCalledWith(
                    output.resElegLowConsumptionAndModality
                )
            })
        })
    })

    describe('quando falha a execução do service', () => {
        describe('falha não esperada', () => {
            beforeEach(async () => {
                jest.spyOn(clientService, 'verify').mockImplementation(() => {
                    throw new Error()
                })
                req.body = input.elegOk
                await clientController.eligibility(req, res, next)
            })

            it('chama o middleware de erro', () => {
                expect(next).toHaveBeenCalled()
            })
        })
    })
})
