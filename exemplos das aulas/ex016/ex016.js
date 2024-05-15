let num= [1,2,3,4,5]  // Cria um array chamado "num" com os números de 1 a 5.
console.log(`Nosso vetor é o ${num}`)  // Imprime o array "num".

num[5]=6  // Adiciona o número 6 na posição 5 do array "num".
console.log(`adicionando o número 6 na posição 5: ${num}`)  // Imprime o array "num" após a adição do número 6.

num.push(7)  // Adiciona o número 7 no final do array "num".
console.log(`adicionando o número 7 no final do vetor: ${num}`)  // Imprime o array "num" após a adição do número 7.

console.log(`O vetor tem ${num.length} posições`)  // Imprime o comprimento do array "num".

num.sort()  // Ordena os elementos do array "num" em ordem crescente.
console.log(`O vetor ordenado é ${num}`)  // Imprime o array "num" após a ordenação.

console.log(`O primeiro valor do vetor é ${num[0]}`)  // Imprime o primeiro valor do array "num".

num.pop()  // Remove o último elemento do array "num".
console.log(`Removendo o último elemento do vetor: ${num}`)  // Imprime o array "num" após a remoção.

num.unshift(0)  // Adiciona o número 0 no início do array "num".
console.log(`Adicionando o número 0 no início do vetor: ${num}`)  // Imprime o array "num" após a adição do número 0.

num.shift()  // Remove o primeiro elemento do array "num".
console.log(`Removendo o primeiro elemento do vetor: ${num}`)  // Imprime o array "num" após a remoção.

// Métodos para adicionar e remover elementos:
num.splice(2, 0, 2.5);  // Adiciona o elemento 2.5 na posição 2 do array "num".
console.log(`Adicionando o elemento 2.5 na posição 2: ${num}`);

num.splice(3, 1);  // Remove 1 elemento a partir da posição 3 do array "num".
console.log(`Removendo um elemento na posição 3: ${num}`);

// Métodos para buscar elementos:
let posicao = num.indexOf(4);  // Retorna a posição do elemento 4 no array "num".
console.log(`A posição do elemento 4 é: ${posicao}`);

let existe = num.includes(3);  // Verifica se o elemento 3 está presente no array "num".
console.log(`O elemento 3 está presente no vetor: ${existe}`);

// Métodos para transformação de arrays:
let duplicado = num.concat(num);  // Concatena o array "num" com ele mesmo.
console.log(`O vetor duplicado é: ${duplicado}`);

let reverso = num.reverse();  // Inverte a ordem dos elementos no array "num".
console.log(`O vetor invertido é: ${reverso}`);

let stringNum = num.join(', ');  // Converte os elementos do array "num" em uma string separada por vírgula.
console.log(`O vetor como uma string é: ${stringNum}`);
