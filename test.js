// importamos la function sum del archivo app.js
const { sum } = require('./app.js');

//primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra function
    let total = sum(14,9);

    //esperamos que la sumade los 2 numeros sea 23
    expect(total).toBe(23);
});