// importamos la function sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

//primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra function
    let total = sum(14,9);

    //esperamos que la sumade los 2 numeros sea 23
    expect(total).toBe(23);
});


//testeamos lo otro
test('One euro should be 1.2 dollars', function(){
    //hacemos la comparacion en el mismo expect
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test('One dollar should be 109.694134 yen', () => {
    expect(fromDollarToYen(1)).toBe(109.694134);
});

test('One yen should be 0.006576 british punds', () => {
    expect(fromYenToPound(1)).toBe(0.006576);
});

test('Hallo should be NaN dollar', () => {
    expect(fromDollarToYen('Hallo')).toBe(NaN);
});

test(' "1" dollar should be 109.694134 yen', () => {
    expect(fromDollarToYen("1")).toBe(109.694134);
})

test(' "-1 " dollar should be -109.694134 yen', () => {
    expect(fromDollarToYen("-1 ")).toBe(-109.694134);
})