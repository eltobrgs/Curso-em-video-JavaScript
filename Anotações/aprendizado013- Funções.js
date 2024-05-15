/* As funções são blocos de código que podem ser reutilizados para executar uma tarefa específica. 
Elas ajudam a organizar e modularizar o código, tornando-o mais legível e fácil de manter.

Vou começar com um exemplo básico de uma função simples que recebe dois números e retorna a soma deles:*/


function somar(a, b) {
  return a + b;
}

let resultado = somar(2, 3);
console.log(resultado); // Output: 5


/*Neste exemplo, temos uma função chamada `somar` que recebe dois parâmetros `a` e `b`. 
Dentro da função, os parâmetros são somados e o resultado é retornado usando a palavra-chave `return`. 
Em seguida, chamamos a função `somar` passando os valores `2` e `3` como argumentos e armazenamos o resultado na variável `resultado`. 
Por fim, imprimimos o resultado no console.

Agora, vamos para um exemplo um pouco mais avançado. Suponha que queremos calcular o fatorial de um número usando uma função recursiva:*/


function calcularFatorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * calcularFatorial(n - 1);
  }
}

let fatorialDe5 = calcularFatorial(5);
console.log(fatorialDe5); // Output: 120


/*Neste exemplo, temos uma função chamada `calcularFatorial` que recebe um parâmetro `n`. 
Dentro da função, verificamos se `n` é igual a zero. Se for, retornamos `1`, pois o fatorial de zero é definido como 1. 
Caso contrário, chamamos a função `calcularFatorial` recursivamente, passando `n - 1` como argumento e multiplicando o resultado por `n`. 
Isso nos permite calcular o fatorial de qualquer número.

Esses são apenas dois exemplos básicos de funções. Existem muitos outros conceitos e recursos avançados relacionados a funções, 
como funções anônimas, funções de ordem superior e funções de retorno de chamada.*/

