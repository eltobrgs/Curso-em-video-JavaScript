//função par ou impar
function parimp(n){
    if (n%2==0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
console.log("quando o numero nao for divisivel por 2 ele retorna: "+parimp(3))
console.log("quando o numero é divisivel por 2 ele retorna: "+parimp(4))

//função soma
function soma(n1, n2){
    return n1+n2
}
console.log("a soma de 2+5 é: "+soma(2,5))

//função fatorial
function fatorial(n){
    let fat=1
    for(let c=n; c>1; c--){
        fat*=c
    }
    return fat
}
console.log("o fatorial de 5 é: "+fatorial(5))
//5!= 5* 4* 3* 2* 1= 120

//função fatorial com recursividade
function fatorialRecursivo(n){
    if(n==1){
        return 1
    } else {
        return n*fatorialRecursivo(n-1)
    }
}
console.log("o fatorial de 10 é: "+fatorialRecursivo(10))
/*A recursividade é um conceito em que uma função chama a si mesma até que uma condição base seja atingida. Neste caso, a condição base én 1. 
Quando é igual a 1, a função retorna 1 e para de chamar a si mesma.

Se não é igual a 1, a função retorna multiplicado pelo fatorial de n-1. Isso significa que a função chama a si mesma, mas desta vez com n-1. 
Este processo se repete até que seja igual a 1.

Pur exemplo, se chamarmos fatoriol Recursivo (5), a função irá calcular 5 fatorialRecursivo(4), que por sua vez calcula 4 fatorialRecursivo(3), 
e assim por diante, até que seja igual a 1. */


//função fatorial com recursividade simplificada usando operador ternario
function fatorialRecursivoSimplificado(n){
    return n==1 ? 1 : n*fatorialRecursivoSimplificado(n-1)
}

console.log("o fatorial de 15 é: "+fatorialRecursivoSimplificado(15))

//função dentro de variavel
let mult= function(x){
    return x*2
}
console.log(mult(5))

//Arrow function
const div = (a, b) => a / b;
console.log(div(15, 3)); // Output: 5
