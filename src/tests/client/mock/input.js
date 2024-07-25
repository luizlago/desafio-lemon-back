// valido
const elegOk = {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [
        3878, // mes atual
        9760, // mes anterior
        5976, // 2 meses atras
        2797, // 3 meses atras
        2481, // 4 meses atras
        5731, // 5 meses atras
        7538, // 6 meses atras
        4392, // 7 meses atras
        7859, // 8 meses atras
        4160, // 9 meses atras
        6941, // 10 meses atras
        4597, // 11 meses atras
    ],
}

// quando a classe  de consumo é inválida
const elegClass = {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'rural',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [
        3878, // mes atual
        9760, // mes anterior
        5976, // 2 meses atras
        2797, // 3 meses atras
        2481, // 4 meses atras
        5731, // 5 meses atras
        7538, // 6 meses atras
        4392, // 7 meses atras
        7859, // 8 meses atras
        4160, // 9 meses atras
        6941, // 10 meses atras
        4597, // 11 meses atras
    ],
}

// quando a modalidade  de consumo é inválida
const elegModality = {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    modalidadeTarifaria: 'verde',
    historicoDeConsumo: [
        3878, // mes atual
        9760, // mes anterior
        5976, // 2 meses atras
        2797, // 3 meses atras
        2481, // 4 meses atras
        5731, // 5 meses atras
        7538, // 6 meses atras
        4392, // 7 meses atras
        7859, // 8 meses atras
        4160, // 9 meses atras
        6941, // 10 meses atras
        4597, // 11 meses atras
    ],
}

// quando a classe e a modalidade  de consumo é inválida
const elegClassAndModality = {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'rural',
    modalidadeTarifaria: 'verde',
    historicoDeConsumo: [
        3878, // mes atual
        9760, // mes anterior
        5976, // 2 meses atras
        2797, // 3 meses atras
        2481, // 4 meses atras
        5731, // 5 meses atras
        7538, // 6 meses atras
        4392, // 7 meses atras
        7859, // 8 meses atras
        4160, // 9 meses atras
        6941, // 10 meses atras
        4597, // 11 meses atras
    ],
}

// quando o consumo minimo está abaixo
const elegLowConsumption = {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [
        100, // mes atual
        100, // mes anterior
        100, // 2 meses atras
        100, // 3 meses atras
        100, // 4 meses atras
        100, // 5 meses atras
        100, // 6 meses atras
        100, // 7 meses atras
        100, // 8 meses atras
        100, // 9 meses atras
        100, // 10 meses atras
        100, // 11 meses atras
    ],
}

// quando a modalidade e o consumo são inválidos
const elegLowConsumptionAndModality = {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    modalidadeTarifaria: 'verde',
    historicoDeConsumo: [
        100, // mes atual
        100, // mes anterior
        100, // 2 meses atras
        100, // 3 meses atras
        100, // 4 meses atras
        100, // 5 meses atras
        100, // 6 meses atras
        100, // 7 meses atras
        100, // 8 meses atras
        100, // 9 meses atras
        100, // 10 meses atras
        100, // 11 meses atras
    ],
}

// quando a classe e o consumo são inválidos
const elegLowConsumptionAndClass = {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'rural',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [
        100, // mes atual
        100, // mes anterior
        100, // 2 meses atras
        100, // 3 meses atras
        100, // 4 meses atras
        100, // 5 meses atras
        100, // 6 meses atras
        100, // 7 meses atras
        100, // 8 meses atras
        100, // 9 meses atras
        100, // 10 meses atras
        100, // 11 meses atras
    ],
}
// quando existem campos ausentes
const elegFieldMissing = {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'rural',
    modalidadeTarifaria: 'verde',
}

export default {
    elegOk,
    elegClass,
    elegFieldMissing,
    elegLowConsumption,
    elegLowConsumptionAndClass,
    elegLowConsumptionAndModality,
    elegModality,
    elegClassAndModality,
}
