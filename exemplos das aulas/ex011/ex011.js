//objetivo: Verificar se a pessoa pode votar ou não, e se o voto é obrigatório ou não.

var idade = 16; // Definir a idade da pessoa

if (idade >= 18) { // Se a idade for 18 ou mais
    console.log("Você pode votar."); // Imprimir "Você pode votar."
} else if (idade >= 16 || idade > 70) { // Se a idade estiver entre 16 e 70 (inclusive)
    console.log("Você pode votar, mas não é obrigatório."); // Imprimir "Você pode votar, mas não é obrigatório."
} else { // Se a idade for menor que 16
    console.log("Você é menor de idade, por isso não pode votar."); // Imprimir "Você é menor de idade, por isso não pode votar."
}
