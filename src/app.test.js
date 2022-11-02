// const { sum } = require('./app')

// test('si introducimos 3 y 7 en la funcion deberia sumar 10',()=>{
//     let result = sum(3,7)
//     expect(result).toBe(10)
// })

const { myNumberVenezuela } = require('./app')

test('si introducimos el numero correctamente, ejem: 04241397963',()=>{
    let numero = myNumberVenezuela("04241397963")
    expect(numero).toBe(true)
})

test('si introducimos el numero incompleto por un numero, ejem: 0424139796',()=>{
    let numero = myNumberVenezuela("0424139796")
    expect(numero).toBe(false)
})

test('si introducimos numeros en vez de un string, ejem: 04241397963',()=>{
    let numero = myNumberVenezuela(0)
    expect(numero).toBe(false)
})

test('si introducimos guiones en el numero, ejem: 0424-139-7963',()=>{
    let numero = myNumberVenezuela("0424-139-7963")
    expect(numero).toBe(false)
})

test('si introducimos un string vacio, ejemplo ""',()=>{
    let numero = myNumberVenezuela("")
    expect(numero).toBe(false)
})


