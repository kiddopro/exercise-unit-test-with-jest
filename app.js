function sum(a,b){
    return a+b;
}

let oneEuroIs = {
    "JPY" : 127.9, //yen
    "USD" : 1.2, //dollar
    "GBP" : 0.8 //british pound
}

let oneDollarIs = {
    "EUR" : 0.841787,
    "GBP" : 0.721487,
    "JPY" : 109.694134
}

let oneYenIs = {
    "GBP" : 0.006576,
    "EUR" : 0.007674,
    "USA" : 0.009116
}

function fromEuroToDollar(euro){
    return euro * oneEuroIs.USD;
}


function fromDollarToYen(dolar){
    return dolar * oneDollarIs.JPY;
}


function fromYenToPound(yen){
    return yen * oneYenIs.GBP;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }