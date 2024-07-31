import { jest } from '@jest/globals'

import request from 'supertest'
import app from '../../../config/express.js'
import clientService from '../../../services/clientService'
import schemaInput from '../../schema/mock/input'
import clientInput from '../../client/mock/input'
import clientOutput from '../../client/mock/output'

import { HttpCode } from '../../../constants/httpCodes.js'

jest.useFakeTimers()
jest.setTimeout(1000)

let server

beforeAll(() => {
    // Inicia o servidor e captura a instância do servidor
    server = app.listen(3000)
})

afterAll((done) => {
    // Fecha o servidor após todos os testes serem concluídos
    server.close(done)
})

describe('POST /elegibilidade', () => {
    describe('Payload OK', () => {
        describe('cliente elegivel', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(clientInput.elegOk)
            })

            it('retorna o código de status 200', () => {
                expect(response.status).toBe(HttpCode.OK)
            })

            it('retorna um objeto', () => {
                expect(response.body).toBeInstanceOf(Object)
            })

            it('o objeto possui a propriedade "economiaAnualDeCO2"', () => {
                expect(response.body).toHaveProperty('economiaAnualDeCO2')
            })
        })

        describe('quando a classe  de consumo é inválida', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(clientInput.elegClass)
            })

            it('retorna o código de status 200', () => {
                expect(response.status).toBe(HttpCode.OK)
            })

            it('retorna um objeto', () => {
                expect(response.body).toBeInstanceOf(Object)
            })

            it('retorno esperado"', () => {
                expect(response.body).toEqual(clientOutput.resElegClass)
            })
        })
        describe('quando a modalidade tarifária é inválida', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(clientInput.elegModality)
            })

            it('retorna o código de status 200', () => {
                expect(response.status).toBe(HttpCode.OK)
            })

            it('retorna um objeto', () => {
                expect(response.body).toBeInstanceOf(Object)
            })

            it('retorno esperado"', () => {
                expect(response.body).toEqual(clientOutput.resElegModality)
            })
        })
        describe('quando a classe e a modalidade são invalidas', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(clientInput.elegClassAndModality)
            })

            it('retorna o código de status 200', () => {
                expect(response.status).toBe(HttpCode.OK)
            })

            it('retorna um objeto', () => {
                expect(response.body).toBeInstanceOf(Object)
            })

            it('retorno esperado"', () => {
                expect(response.body).toEqual(
                    clientOutput.resElegClassAndModality
                )
            })
        })
        describe('quando o consumo minimo está abaixo', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(clientInput.elegLowConsumption)
            })

            it('retorna o código de status 200', () => {
                expect(response.status).toBe(HttpCode.OK)
            })

            it('retorna um objeto', () => {
                expect(response.body).toBeInstanceOf(Object)
            })

            it('retorno esperado"', () => {
                expect(response.body).toEqual(
                    clientOutput.resElegLowConsumption
                )
            })
        })
        describe('quando a classe e o consumo são inválidos', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(clientInput.elegLowConsumptionAndClass)
            })

            it('retorna o código de status 200', () => {
                expect(response.status).toBe(HttpCode.OK)
            })

            it('retorna um objeto', () => {
                expect(response.body).toBeInstanceOf(Object)
            })

            it('retorno esperado"', () => {
                expect(response.body).toEqual(
                    clientOutput.resElegLowConsumptionAndClass
                )
            })
        })
        describe('quando a modalidade e o consumo são inválidos', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(clientInput.elegLowConsumptionAndModality)
            })

            it('retorna o código de status 200', () => {
                expect(response.status).toBe(HttpCode.OK)
            })

            it('retorna um objeto', () => {
                expect(response.body).toBeInstanceOf(Object)
            })

            it('retorno esperado"', () => {
                expect(response.body).toEqual(
                    clientOutput.resElegLowConsumptionAndModality
                )
            })
        })
        describe('quando a subclasse  de consumo é inválida', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(clientInput.elegSubClass)
            })

            it('retorna o código de status 200', () => {
                expect(response.status).toBe(HttpCode.OK)
            })

            it('retorna um objeto', () => {
                expect(response.body).toBeInstanceOf(Object)
            })

            it('retorno esperado"', () => {
                expect(response.body).toEqual(clientOutput.resElegSubClass)
            })
        })
    })

    describe('Falha no payload', () => {
        describe('com "numeroDoDocumento" inválido', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(schemaInput.elegDoc)
            })
            it('retorna o código de status 400', () => {
                expect(response.status).toBe(HttpCode.UNPROCESSABLE_ENTITY)
                expect(response.body.error.details[0].message).toContain(
                    'numeroDoDocumento'
                )
            })
        })
        describe('com "tipoDeConexao" inválido', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(schemaInput.elegConnection)
            })
            it('retorna o código de status 400', () => {
                expect(response.status).toBe(HttpCode.UNPROCESSABLE_ENTITY)
                expect(response.body.error.details[0].message).toContain(
                    'tipoDeConexao'
                )
            })
        })
        describe('com "classeDeConsumo" inválido', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(schemaInput.elegClass)
            })
            it('retorna o código de status 400', () => {
                expect(response.status).toBe(HttpCode.UNPROCESSABLE_ENTITY)
                expect(response.body.error.details[0].message).toContain(
                    'classeDeConsumo'
                )
            })
        })
        describe('com "modalidadeTarifaria" inválido', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(schemaInput.elegModality)
            })
            it('retorna o código de status 400', () => {
                expect(response.status).toBe(HttpCode.UNPROCESSABLE_ENTITY)
                expect(response.body.error.details[0].message).toContain(
                    'modalidadeTarifaria'
                )
            })
        })
        describe('com "historicoDeConsumo" inválido', () => {
            let response

            beforeAll(async () => {
                response = await request(app)
                    .post('/api/v1/cliente/elegibilidade')
                    .send(schemaInput.elegHistory)
            })
            it('retorna o código de status 400', () => {
                expect(response.status).toBe(HttpCode.UNPROCESSABLE_ENTITY)
                expect(response.body.error.details[0].message).toContain(
                    'historicoDeConsumo'
                )
            })
        })

        //     describe('com "tipoDeConexao" inválida', () => {
        //         let response

        //         beforeAll(async () => {
        //             response = await request(app)
        //                 .post('/elegibilidade')
        //                 .send(input.errorTipoDeConexao)
        //         })

        //         it('retorna o código de status 400', () => {
        //             expect(response.status).toBe(400)
        //         })

        //         it('retorna um objeto', () => {
        //             expect(response.body).toBeInstanceOf(Object)
        //         })

        //         it('o objeto possui a propriedade "message"', () => {
        //             expect(response.body).toHaveProperty('message')
        //         })

        //         it('a propriedade "message" possui o texto ""tipoDeConexao" must be one of [monofasico, bifasico, trifasico]"', () => {
        //             expect(response.body.message).toBe(
        //                 '"tipoDeConexao" must be one of [monofasico, bifasico, trifasico]'
        //             )
        //         })
        //     })

        //     describe('com "historicoDeConsumo" inválido', () => {
        //         let response

        //         beforeAll(async () => {
        //             response = await request(app)
        //                 .post('/elegibilidade')
        //                 .send(input.errorHistoricoDeConsumo)
        //         })

        //         it('retorna o código de status 400', () => {
        //             expect(response.status).toBe(400)
        //         })

        //         it('retorna um objeto', () => {
        //             expect(response.body).toBeInstanceOf(Object)
        //         })

        //         it('o objeto possui a propriedade "message"', () => {
        //             expect(response.body).toHaveProperty('message')
        //         })

        //         it('a propriedade "message" possui o texto ""historicoDeConsumo" must contain less than or equal to 12 items', () => {
        //             expect(response.body.message).toBe(
        //                 '"historicoDeConsumo" must contain less than or equal to 12 items'
        //             )
        //         })
        //     })
    })
})
