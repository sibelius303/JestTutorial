// const sum = ( a, b) =>{
//     return a + b
// }

// module.exports = { sum }

const myNumberVenezuela = (num)=>{
    if (num == "04241397963"){
        return true
    } else if (num == 0){
        return false
    } else if (num == "0424139796"){
        return false
    } else if ( num == "0424-139-7963"){
        return false
    } else if ( num != ""){
        return false
    }

}

module.exports = { myNumberVenezuela }