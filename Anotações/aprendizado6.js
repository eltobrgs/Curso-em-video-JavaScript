
// Operadores Lógicos:
let and = true && true; // (and será igual a true) && é o operador de conjunção, ambos devem ser verdadeiros para que o resultado seja verdadeiro
let or = true || false; // (or será igual a true) || é o operador de disjunção, basta que um seja verdadeiro para que o resultado seja verdadeiro
let not = !true; // (not será igual a false)  ! é o operador de negação, inverte o valor lógico

console.log("and:", and); // Imprime o valor de and no console
console.log("or:", or); // Imprime o valor de or no console
console.log("not:", not); // Imprime o valor de not no console

//expressoes lógicas
let idade = 16;
let estado = 'MG';
let salario = 2000;
let sexo = 'M';
console.log("idade entre 15 e 17:", idade>=15 && idade<=17);
console.log("estado é SP ou RJ:", estado=='SP' || estado=='RJ');
console.log("salário maior que 1500 e sexo diferente de masculino:", salario>1500 && sexo!='M');

// Exemplo lúdico:
// Imagine que você está organizando uma festa e precisa verificar se todas as condições estão satisfeitas para que a festa aconteça.
// A condição 1 é que você tenha comprado os ingredientes para fazer os salgadinhos.
// A condição 2 é que você tenha alugado as mesas e cadeiras.
// A condição 3 é que o clima esteja bom para realizar a festa ao ar livre.

// Usando o operador de conjunção (&&), você pode verificar se todas as condições estão satisfeitas:
let comprouIngredientes = true;
let alugouMesasCadeiras = true;
let climaBom = true;

let festaAcontece = comprouIngredientes && alugouMesasCadeiras && climaBom;

console.log("A festa acontece?", festaAcontece); // Imprime o valor de festaAcontece no console

// Exemplo prático:
// Imagine que você está desenvolvendo um sistema de login e precisa verificar se o usuário inseriu as informações corretas.
// A condição 1 é que o usuário tenha inserido um email válido.
// A condição 2 é que o usuário tenha inserido uma senha válida.

// Usando o operador de disjunção (||), você pode verificar se pelo menos uma das condições está satisfeita:
let emailValido = true;
let senhaValida = false;

let loginValido = emailValido || senhaValida;

console.log("O login é válido?", loginValido); // Imprime o valor de loginValido no console

// Exemplo prático:
// Imagine que você está desenvolvendo um sistema de permissões e precisa verificar se um usuário não tem permissão para acessar uma determinada funcionalidade.
// A condição é que o usuário não tenha a permissão de administrador.

// Usando o operador de negação (!), você pode verificar se a condição é falsa:
let permissaoAdministrador = true;

let semPermissao = !permissaoAdministrador;

console.log("O usuário tem permissão?", semPermissao); // Imprime o valor de semPermissao no console


