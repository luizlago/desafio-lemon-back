const ALLOWED_CLASSES = ['comercial', 'residencial', 'industrial']
const ALLOWED_MODALITY = ['convencional', 'branca']
const MIN_CONSUMPTION = {
    monofasico: 400,
    bifasico: 500,
    trifasico: 750,
}
const ALLOWED_SUBCLASSES = [
    {
        subClass: 'administracaocondominial',
        class: 'comercial',
    },
    {
        subClass: 'comercial',
        class: 'comercial',
    },
    {
        subClass: 'servicosdetelecomunicacao',
        class: 'comercial',
    },
    {
        subClass: 'servicosdetransporte',
        class: 'comercial',
    },
    {
        subClass: 'industrial',
        class: 'industrial',
    },
    {
        subClass: 'poderpublicoestadual',
        class: 'poderpublico',
    },
    {
        subClass: 'poderpublicomunicipal',
        class: 'poderpublico',
    },
    {
        subClass: 'residencial',
        class: 'residencial',
    },
]

// Calcular a média de consumo
const calculateConsumptionAverage = (history) => {
    const sum = history.reduce((acc, value) => acc + value, 0)
    return sum / history.length
}

// Calcular a economia anual de CO2
const calculateAnnualCO2Savings = (history) => {
    const totalConsumption = calculateConsumptionAverage(history) * 12 //history.reduce((acc, curr) => acc + curr, 0)
    return parseFloat(((totalConsumption / 1000) * 84).toFixed(2), 10)
}

// Verifica a elegibilidade da subclasse em conjunto com a classe
const searchSubclass = (clientInfo) => {
    for (const subClassObj of ALLOWED_SUBCLASSES) {
        if (
            clientInfo.subClasseDeConsumo === subClassObj.subClass &&
            clientInfo.classeDeConsumo === subClassObj.class
        )
            return true
    }
    return false
}

const verifyEligibility = (clientInfo) => {
    const {
        classeDeConsumo,
        modalidadeTarifaria,
        historicoDeConsumo,
        tipoDeConexao,
    } = clientInfo

    let elegible = true
    let reasons = []

    const consumptionAverage = calculateConsumptionAverage(historicoDeConsumo)
    const economiaAnualDeCO2 = calculateAnnualCO2Savings(historicoDeConsumo)

    if (!ALLOWED_CLASSES.includes(classeDeConsumo.toLowerCase())) {
        elegible = false
        reasons.push('Classe de consumo não aceita')
    }
    if (!searchSubclass(clientInfo)) {
        elegible = false
        reasons.push('Subclasse de consumo não aceita')
    }

    if (!ALLOWED_MODALITY.includes(modalidadeTarifaria.toLowerCase())) {
        elegible = false
        reasons.push('Modalidade tarifária não aceita')
    }

    if (consumptionAverage < MIN_CONSUMPTION[tipoDeConexao.toLowerCase()]) {
        elegible = false
        reasons.push('Consumo mínimo insuficiente para o tipo de conexão')
    }

    return elegible
        ? { elegivel: elegible, economiaAnualDeCO2 }
        : { elegivel: elegible, razoesDeInelegibilidade: reasons }
}

export default { verify: verifyEligibility }
