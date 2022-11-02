const { fromDollarToYen } = require('./fromDollarToYen')

test('si cambio 1,2 dolares debo recibir 127.9 yenes',()=>{
    let result = fromDollarToYen(1.2)
    expect(result).toBe(127.9)
})