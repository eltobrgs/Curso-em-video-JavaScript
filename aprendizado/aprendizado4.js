// Operadores Aritméticos:
let soma = 5 + 3; // (soma será igual a 8)
let diferenca = 10 - 5; // (diferenca será igual a 5)
let produto = 2 * 4; // (produto será igual a 8)
let quociente = 10 / 2; // (quociente será igual a 5)
let resto = 10 % 3; // (resto será igual a 1)

console.log("A soma é:", soma); // Imprime a soma no console
console.log("A diferença é:", diferenca); // Imprime a diferença no console
console.log("O produto é:", produto); // Imprime o produto no console
console.log("O quociente é:", quociente); // Imprime o quociente no console
console.log("O resto é:", resto); // Imprime o resto no console

// Operadores de Atribuição:
let x = 5; // (x será igual a 5)
x += 3; // (x será igual a 8)
x -= 2; // (x será igual a 6)
x *= 2; // (x será igual a 12)
x /= 3; // (x será igual a 4)

// Operadores de Comparação:
let igual = 5 == 5; // (igual será igual a true)
let diferente = 5 != 3; // (diferente será igual a true)
let maior = 10 > 5; // (maior será igual a true)
let menor = 3 < 5; // (menor será igual a true)
let maiorOuIgual = 5 >= 5; // (maiorOuIgual será igual a true)
let menorOuIgual = 3 <= 5; // (menorOuIgual será igual a true)

console.log("5 igual a 5?", igual); // Imprime o valor de igual no console
console.log("5 diferente de 3?", diferente); // Imprime o valor de diferente no console
console.log("10 maior que 5?", maior); // Imprime o valor de maior no console
console.log("3 menor que 5?", menor); // Imprime o valor de menor no console
console.log("5 maior ou igual a 5?", maiorOuIgual); // Imprime o valor de maiorOuIgual no console
console.log("3 menor ou igual a 5?", menorOuIgual); // Imprime o valor de menorOuIgual no console

// Operadores Lógicos:
let and = true && true; // (and será igual a true)
let or = true || false; // (or será igual a true)
let not = !true; // (not será igual a false)

console.log("and:", and); // Imprime o valor de and no console
console.log("or:", or); // Imprime o valor de or no console
console.log("not:", not); // Imprime o valor de not no console


// Operadores de Incremento e Decremento:
let i = 5;
i++; // (i será igual a 6)
let j = 5;
j--; // (j será igual a 4)

console.log("i:", i); // Imprime o valor de i no console
console.log("j:", j); // Imprime o valor de j no console

// Operador Ternário:
let idade = 18;
let status = (idade >= 18) ? 'Maior de idade' : 'Menor de idade'; // (status será igual a 'Maior de idade')
console.log("status:", status); // Imprime o valor de status no console

// Operador de Concatenação:
let nome = 'João';
let sobrenome = 'Silva';
let nomeCompleto = nome + ' ' + sobrenome; // (nomeCompleto será igual a 'João Silva')
console.log("nome", nome); // Imprime o valor de nome no console
console.log("sobrenome:", sobrenome); // Imprime o valor de sobrenome no console
console.log("nomeCompleto:", nomeCompleto); // Imprime o valor de nomeCompleto no console

// Operador de Tipo:
let tipo = typeof 5; // (tipo será igual a 'number')
let tipoString = typeof 'JavaScript'; // (tipoString será igual a 'string')
let tipoBoolean = typeof true; // (tipoBoolean será igual a 'boolean')

console.log("tipo:", tipo); // Imprime o valor de tipo no console
console.log("tipoString:", tipoString); // Imprime o valor de tipoString no console
console.log("tipoBoolean:", tipoBoolean); // Imprime o valor de tipoBoolean no console

/*Em JavaScript, a ordem de precedência dos operadores é a seguinte:

1=Parênteses: Os operadores dentro de parênteses têm a maior precedência. Eles são usados para agrupar partes de uma expressão e definir a ordem de avaliação.

2=Operadores de exponenciação (**): O operador de exponenciação é usado para calcular a potência de um número. Por exemplo, 2 ** 3 retorna 8, pois é igual a 2 elevado à potência de 3.

3=Multiplicação, divisão e resto (%): Os operadores de multiplicação (*), divisão (/) e resto (%) têm a mesma precedência e são avaliados da esquerda para a direita. Por exemplo, 10 / 2 * 3 retorna 15, pois a divisão é executada primeiro e depois a multiplicação.

4=Adição e subtração: Os operadores de adição (+) e subtração (-) também têm a mesma precedência e são avaliados da esquerda para a direita. Por exemplo, 5 + 3 - 2 retorna 6, pois a adição é executada primeiro e depois a subtração.

5=Operadores de comparação: Os operadores de comparação (==, !=, >, <, >=, <=) têm menor precedência do que os operadores aritméticos. Eles são usados para comparar valores e retornam um valor booleano (true ou false). Por exemplo, 5 > 3 retorna true.

6=Operadores de atribuição: Os operadores de atribuição (=, +=, -=, *=, /=) têm a menor precedência. Eles são usados para atribuir valores a variáveis. Por exemplo, x = 5 atribui o valor 5 à variável x.

É importante lembrar que, se houver operadores com a mesma precedência em uma expressão, a avaliação ocorrerá da esquerda para a direita. */