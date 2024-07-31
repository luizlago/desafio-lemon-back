import { jest } from '@jest/globals'

import clientService from '../../../services/clientService.js'
import output from '../mock/output.js'
import input from '../mock/input.js'

describe('Service das rotas cliente', () => {
    describe('cliente elegível', () => {
        let result
        beforeEach(async () => {
            result = await clientService.verify(input.elegOk)
        })
        it('retorno esperado', () => {
            expect(result).toEqual(output.resElegOk)
        })
    })
    describe('cliente não é elegível', () => {
        describe('quando a classe  de consumo é inválida', () => {
            let result
            beforeEach(async () => {
                result = await clientService.verify(input.elegClass)
            })
            it('retorno esperado', () => {
                expect(result).toEqual(output.resElegClass)
            })
        })
        describe('quando a subclasse  de consumo é inválida', () => {
            let result
            beforeEach(async () => {
                result = await clientService.verify(input.elegSubClass)
            })
            it('retorno esperado', () => {
                expect(result).toEqual(output.resElegSubClass)
            })
        })
        describe('quando a modalidade tarifária é inválida', () => {
            let result
            beforeEach(async () => {
                result = await clientService.verify(input.elegModality)
            })
            it('retorno esperado', () => {
                expect(result).toEqual(output.resElegModality)
            })
        })
        describe('quando a classe e a modalidade são invalidas', () => {
            let result
            beforeEach(async () => {
                result = await clientService.verify(input.elegClassAndModality)
            })
            it('retorno esperado', () => {
                expect(result).toEqual(output.resElegClassAndModality)
            })
        })
        describe('quando o consumo minimo está abaixo', () => {
            let result
            beforeEach(async () => {
                result = await clientService.verify(input.elegLowConsumption)
            })
            it('retorno esperado', () => {
                expect(result).toEqual(output.resElegLowConsumption)
            })
        })
        describe('quando a classe e o consumo são inválidos', () => {
            let result
            beforeEach(async () => {
                result = await clientService.verify(
                    input.elegLowConsumptionAndClass
                )
            })
            it('retorno esperado', () => {
                expect(result).toEqual(output.resElegLowConsumptionAndClass)
            })
        })
        describe('quando a modalidade e o consumo são inválidos', () => {
            let result
            beforeEach(async () => {
                result = await clientService.verify(
                    input.elegLowConsumptionAndModality
                )
            })
            it('retorno esperado', () => {
                expect(result).toEqual(output.resElegLowConsumptionAndModality)
            })
        })
    })
})
