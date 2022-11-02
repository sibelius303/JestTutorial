const { fromYenToPound } = require('./fromYenToPound')

test('si cambiamos 127.9 yen por libras, debemos recibir 0.8 libras',()=>{
    let exchange= fromYenToPound(127.9)
    expect(exchange).toBe(0.8)
})