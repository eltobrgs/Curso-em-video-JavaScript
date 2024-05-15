
// Operadores de Comparação: *sempre retornam um valor booleano (true ou false) 
let igual = 5 == 5; // (igual será igual a true) == compara se os valores são iguais (obs: = é diferente de ==)
let igual2 = 5 === '5'; // (igual2 será igual a false) === compara se os valores são iguais e do mesmo tipo (obs: == é diferente de ===)
let diferente = 5 != 3; // (diferente será igual a true) != compara se os valores são diferentes
let diferente2 = 5 !== '5'; // (diferente2 será igual a true) !== compara se os valores são diferentes ou do mesmo tipo (obs: != é diferente de !==)
let maior = 10 > 5; // (maior será igual a true) > compara se o valor da esquerda é maior que o da direita
let menor = 3 < 5; // (menor será igual a true) < compara se o valor da esquerda é menor que o da direita
let maiorOuIgual = 5 >= 5; // (maiorOuIgual será igual a true) >= compara se o valor da esquerda é maior ou igual ao da direita
let menorOuIgual = 3 <= 2; // (menorOuIgual será igual a false) <= compara se o valor da esquerda é menor ou igual ao da direita

console.log("5 igual a 5?", igual); // Imprime o valor de igual no console
console.log("5 igual a '5'?", igual2); // Imprime o valor de igual2 no console
console.log("5 diferente de 3?", diferente); // Imprime o valor de diferente no console
console.log("5 diferente de '5'?", diferente2); // Imprime o valor de diferente2 no console
console.log("10 maior que 5?", maior); // Imprime o valor de maior no console
console.log("3 menor que 5?", menor); // Imprime o valor de menor no console
console.log("5 maior ou igual a 5?", maiorOuIgual); // Imprime o valor de maiorOuIgual no console
console.log("3 menor ou igual a 2?", menorOuIgual); // Imprime o valor de menorOuIgual no console


    
// Operadores de Incremento e Decremento:
let i = 5;
i++; // (i será igual a 6)
let j = 5;
j--; // (j será igual a 4)

console.log("i:", i); // Imprime o valor de i no console
console.log("j:", j); // Imprime o valor de j no console



