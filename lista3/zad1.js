function suma(...args){
    let suma = 0
    for (let item of args){
        suma += item
    }
    return suma
}
console.log(suma(1,2,3,4,5,6))
