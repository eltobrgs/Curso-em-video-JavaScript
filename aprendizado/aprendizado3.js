var s = "Aprendendo JavaScript";

var tamanho = s.length; // Armazena o tamanho da string 's' na variável 'tamanho'
var posicao = s.indexOf("JavaScript"); // Armazena a posição da primeira ocorrência da palavra 'JavaScript' na variável 'posicao'
var maisculo = s.toUpperCase(); // Armazena a string 's' em letras maiúsculas na variável 'maisculo'
var minusculo = s.toLowerCase(); // Armazena a string 's' em letras minúsculas na variável 'minusculo'
var primeiraLetra = s.charAt(0); // Armazena a primeira letra da string 's' na variável 'primeiraLetra'
var ultimaLetra = s.charAt(s.length - 1); // Armazena a última letra da string 's' na variável 'ultimaLetra'
var substring = s.substring(0, 9); // Armazena uma substring da string 's' que vai do índice 0 ao índice 9 na variável 'substring'
var substituir = s.replace("JavaScript", "Node.js"); // Substitui a palavra 'JavaScript' por 'Node.js' na string 's' e armazena o resultado na variável 'substituir'

console.log(tamanho); // Imprime o tamanho da string 's' no console
console.log(posicao); // Imprime a posição da palavra 'JavaScript' no console
console.log(maisculo); // Imprime a string 's' em letras maiúsculas no console
console.log(minusculo); // Imprime a string 's' em letras minúsculas no console
console.log(primeiraLetra); // Imprime a primeira letra da string 's' no console
console.log(ultimaLetra); // Imprime a última letra da string 's' no console
console.log(substring); // Imprime a substring da string 's' no console
console.log(substituir); // Imprime a string 's' com a substituição da palavra 'JavaScript' por 'Node.js' no console
