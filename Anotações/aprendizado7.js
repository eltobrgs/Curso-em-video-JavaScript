
// Operador Ternário: (condição) ? 'Valor para verdadeiro' : 'Valor para falso'
/* O operador ternário é uma forma concisa de escrever uma instrução if-else. */
let idade = 18;
let status = (idade >= 18) ? 'Maior de idade' : 'Menor de idade'; // (status será igual a 'Maior de idade')
console.log("status:", status); // Imprime o valor de status no console
/*pode ser lido como: se idade for maior ou igual a 18, 
então status será maior de idade, caso contrario, status é definido como menor de idade */

// Operador de Concatenação:
let nome = 'João';
let sobrenome = 'Silva';
let nomeCompleto = nome + ' ' + sobrenome; // (nomeCompleto será igual a 'João Silva')
console.log("nome", nome); // Imprime o valor de nome no console
console.log("sobrenome:", sobrenome); // Imprime o valor de sobrenome no console
console.log("nomeCompleto:", nomeCompleto); // Imprime o valor de nomeCompleto no console
console.log(`nomeCompleto(usando templatestrings): ${nomeCompleto}`); // Imprime o valor de nomeCompleto no console usando template string

// Operador de Tipo:
let tipo = typeof 5; // (tipo será igual a 'number')
let tipoString = typeof 'JavaScript'; // (tipoString será igual a 'string')
let tipoBoolean = typeof true; // (tipoBoolean será igual a 'boolean')

console.log("tipo:", tipo); // Imprime o valor de tipo no console
console.log("tipoString:", tipoString); // Imprime o valor de tipoString no console
console.log("tipoBoolean:", tipoBoolean); // Imprime o valor de tipoBoolean no consol