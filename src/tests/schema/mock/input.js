// valido
const elegOk = {
    numeroDoDocumento: '94829673052',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    subClasseDeConsumo: 'comercial',
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

// quando o numeroDoDocumento é inválido
const elegDoc = {
    numeroDoDocumento: '0',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'rural',
    subClasseDeConsumo: '',
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

// quando o tipoDeConexao é inválido
const elegConnection = {
    numeroDoDocumento: '94829673052',
    tipoDeConexao: 'x',
    classeDeConsumo: 'comercial',
    subClasseDeConsumo: 'comercial',
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

// quando o modalidadeTarifaria é inválido
const elegModality = {
    numeroDoDocumento: '94829673052',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    subClasseDeConsumo: 'comercial',
    modalidadeTarifaria: 'roxo',
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

// quando a classeDeConsumo é inválida
const elegClass = {
    numeroDoDocumento: '94829673052',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'invalido',
    subClasseDeConsumo: 'comercial',
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

const elegSubClass = {
    numeroDoDocumento: '94829673052',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    subClasseDeConsumo: 'invalido',
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

// quando o historicoDeConsumo é inválido
const elegHistory = {
    numeroDoDocumento: '94829673052',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    subClasseDeConsumo: 'comercial',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [
        100, // mes atual
        100, // mes anterior
    ],
}

export default {
    elegOk,
    elegClass,
    elegModality,
    elegHistory,
    elegDoc,
    elegConnection,
    elegSubClass,
}
