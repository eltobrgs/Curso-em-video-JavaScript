// Operadores Aritméticos:
let soma = 5 + 3; // (soma será igual a 8) + é o operador de adição
let diferenca = 10 - 5; // (diferenca será igual a 5) - é o operador de subtração
let produto = 2 * 4; // (produto será igual a 8) * é o operador de multiplicação
let quociente = 10 / 2; // (quociente será igual a 5) / é o operador de divisão
let resto = 10 % 3; // (resto será igual a 1) % é o operador de resto

console.log("A soma é:", soma); // Imprime a soma no console
console.log("A diferença é:", diferenca); // Imprime a diferença no console
console.log("O produto é:", produto); // Imprime o produto no console
console.log("O quociente é:", quociente); // Imprime o quociente no console
console.log("O resto é:", resto); // Imprime o resto no console

// Operadores de Atribuição:
let x = 5; // (x será igual a 5) = é o operador de atribuição 
x += 3; // (x será igual a 8) += é o operador de atribuição de adição (obs: x = x + 3)
x -= 2; // (x será igual a 6) -= é o operador de atribuição de subtração (obs: x = x - 2)
x *= 2; // (x será igual a 12) *= é o operador de atribuição de multiplicação (obs: x = x * 2)
x /= 3; // (x será igual a 4) /= é o operador de atribuição de divisão (obs: x = x / 3)

console.log("x:", x); 
console.log("x= x+3:", x+=3); 
console.log("x= x-2:", x-=2); 
console.log("x= x*2:", x*=2); 
console.log("x= x/3:", x/=3); 

/*Em JavaScript, a ordem de precedência dos operadores é a seguinte:

1=Parênteses: Os operadores dentro de parênteses têm a maior precedência. Eles são usados para agrupar partes de uma expressão e definir a ordem de avaliação.

2=Operadores de exponenciação (**): O operador de exponenciação é usado para calcular a potência de um número. Por exemplo, 2 ** 3 retorna 8, pois é igual a 2 elevado à potência de 3.

3=Multiplicação, divisão e resto (%): Os operadores de multiplicação (*), divisão (/) e resto (%) têm a mesma precedência e são avaliados da esquerda para a direita. Por exemplo, 10 / 2 * 3 retorna 15, pois a divisão é executada primeiro e depois a multiplicação.

4=Adição e subtração: Os operadores de adição (+) e subtração (-) também têm a mesma precedência e são avaliados da esquerda para a direita. Por exemplo, 5 + 3 - 2 retorna 6, pois a adição é executada primeiro e depois a subtração.

5=Operadores de comparação: Os operadores de comparação (==, !=, >, <, >=, <=) têm menor precedência do que os operadores aritméticos. Eles são usados para comparar valores e retornam um valor booleano (true ou false). Por exemplo, 5 > 3 retorna true.

6=Operadores lógicos: Os operadores lógicos (&&, ||, !) têm menor precedência do que os operadores de comparação. Eles são usados para combinar ou negar valores booleanos. Por exemplo, true && false retorna false.

7=Operadores de atribuição: Os operadores de atribuição (=, +=, -=, *=, /=) têm a menor precedência. Eles são usados para atribuir valores a variáveis. Por exemplo, x = 5 atribui o valor 5 à variável x.

É importante lembrar que, se houver operadores com a mesma precedência em uma expressão, a avaliação ocorrerá da esquerda para a direita. */