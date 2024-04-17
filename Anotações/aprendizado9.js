/*

Condições são estruturas de controle que permitem que o fluxo do programa seja alterado com base em uma condição específica. Em JavaScript, 
as condições são geralmente expressas usando a instrução `if`, que verifica se uma determinada expressão é verdadeira ou falsa.

 Aqui está um exemplo básico de uma condição em JavaScript:*/
console.log(`Esté é um exemplo de condição em JavaScript: com if e else`);
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}


/*Neste exemplo, a condição `idade >= 18` é avaliada. Se for verdadeira, o código dentro do bloco `if` será executado, 
caso contrário, o código dentro do bloco `else` será executado. 
No caso acima, como a idade é igual a 18, a mensagem "Você é maior de idade" será exibida no console.

Além do `if` e `else`, também podemos usar a instrução `else if` para verificar múltiplas condições. 
 Aqui está um exemplo:*/

console.log(`Esté é um exemplo de condição em JavaScript: com if, else if e else`);
let nota = 80;

if (nota >= 90) {
  console.log("Você tirou uma nota excelente!");
} else if (nota >= 70) {
  console.log("Você tirou uma nota boa.");
} else {
  console.log("Você precisa estudar mais.");
}


/*Neste exemplo, a nota é verificada em três condições diferentes. Se a nota for maior ou igual a 90, a mensagem:
"Você tirou uma nota excelente!" será exibida. Se a nota for maior ou igual a 70, a mensagem "Você tirou uma nota boa."
será exibida. Caso contrário, a mensagem "Você precisa estudar mais." será exibida.

As condições são uma parte fundamental da programação, pois permitem que o código tome decisões com base em diferentes situações.*/