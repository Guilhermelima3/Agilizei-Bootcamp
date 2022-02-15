//Escreva uma função que receba dois números (a e b) como argumentos
//Se a for menor que b, divide a por b
//Caso contrário, multiplique os dois números
//Retorna o valor resultante

function dividirOuMultiplicar(a,b) {
    if (a < b){
    return a / b
    }
    else{
        return a * b
    }
}

console.log(dividirOuMultiplicar(4,12))
console.log(dividirOuMultiplicar(10,6))


// pergunta de sim ou não ? se sim, faz isso : se não, faz aquilo
function dividirOuMultiplicar2(a ,b) {
    return a < b ? a/b : a * b 
}
console.log(dividirOuMultiplicar2(4,12))
console.log(dividirOuMultiplicar2(10,6))