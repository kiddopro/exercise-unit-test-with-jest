function sum(a,b){
    return a+b;
}

let oneEuroIs = {
    "JPY" : 127.9, //yen
    "USD" : 1.2, //dollar
    "GBP" : 0.8 //british pound
}

function fromEuroToDollar(euro){
    return Number(euro) * oneEuroIs.USD;
}


function fromDollarToYen(dolar){
    return Number(dolar) * oneEuroIs.JPY;
}

function fromYenToPound(yen){
    return Number(yen) * oneEuroIs.GBP;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }