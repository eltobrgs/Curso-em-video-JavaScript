

/*As estruturas de repetição, também conhecidas como loops, são usadas em JavaScript para executar o mesmo bloco de código várias vezes. 
Existem vários tipos de estruturas de repetição em JavaScript:*/

//1. **for**: Este loop é usado quando você sabe quantas vezes deseja que o código seja executado.


for (let i = 0; i < 5; i++) {
    console.log(i);
}


//2. **while**: Este loop é usado quando você não sabe quantas vezes o código deve ser executado, mas tem uma condição que deve ser atendida para o loop continuar.


let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}


/*3. **do...while**: Este loop é semelhante ao loop while, mas a condição é verificada após a execução do bloco de código. 
Isso significa que o bloco de código será executado pelo menos uma vez.*/


let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);


//4. **for...in**: Este loop é usado para iterar sobre as propriedades de um objeto.


let obj = {a: 1, b: 2, c: 3};
for (let prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
}


//5. **for...of**: Este loop é usado para iterar sobre os valores de um objeto iterável, como um array.


let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}


//Cada um desses loops tem seu próprio uso dependendo da situação e dos dados com os quais você está trabalhando.