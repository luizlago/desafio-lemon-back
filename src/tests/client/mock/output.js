// valido
const resElegOk = {
    elegivel: true,
    economiaAnualDeCO2: 5553.24,
}

// quando a classe  de consumo é inválida
const resElegClass = {
    elegivel: false,
    razoesDeInelegibilidade: [
        'Classe de consumo não aceita',
        'Subclasse de consumo não aceita',
    ],
}

// quando a subClasse  de consumo é inválida
const resElegSubClass = {
    elegivel: false,
    razoesDeInelegibilidade: ['Subclasse de consumo não aceita'],
}

// quando a modalidade tarifária é inválida
const resElegModality = {
    elegivel: false,
    razoesDeInelegibilidade: ['Modalidade tarifária não aceita'],
}

// quando a classe e a modalidade são invalidas
const resElegClassAndModality = {
    elegivel: false,
    razoesDeInelegibilidade: [
        'Classe de consumo não aceita',
        'Subclasse de consumo não aceita',
        'Modalidade tarifária não aceita',
    ],
}

// quando o consumo minimo está abaixo
const resElegLowConsumption = {
    elegivel: false,
    razoesDeInelegibilidade: [
        'Consumo mínimo insuficiente para o tipo de conexão',
    ],
}

// quando a classe e o consumo são inválidos
const resElegLowConsumptionAndClass = {
    elegivel: false,
    razoesDeInelegibilidade: [
        'Classe de consumo não aceita',
        'Subclasse de consumo não aceita',
        'Consumo mínimo insuficiente para o tipo de conexão',
    ],
}

// quando a modalidade e o consumo são inválidos
const resElegLowConsumptionAndModality = {
    elegivel: false,
    razoesDeInelegibilidade: [
        'Modalidade tarifária não aceita',
        'Consumo mínimo insuficiente para o tipo de conexão',
    ],
}
export default {
    resElegOk,
    resElegClass,
    resElegClassAndModality,
    resElegLowConsumption,
    resElegLowConsumptionAndClass,
    resElegLowConsumptionAndModality,
    resElegModality,
    resElegSubClass,
}
