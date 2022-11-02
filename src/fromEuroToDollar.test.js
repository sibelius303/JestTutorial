const { fromEuroToDollar } = require('./fromEuroToDollar')

test('si cambiamo 1 euro debemos recibir 1.2 dolares',()=>{
    let exchange = fromEuroToDollar(1)
    expect(exchange).toBe(1.2)
}) 