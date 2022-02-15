function dividirOuMultiplicar(a ,b) {
    let resultado
    if (a < b) {
        resultado = a / b
    }else{
        resultado = a * b
    }
    return resultado
}
console.log(dividirOuMultiplicar(4,12))
console.log(dividirOuMultiplicar(10,6))