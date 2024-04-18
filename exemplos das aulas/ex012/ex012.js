// Cria uma nova instância da classe Date, que representa a data e hora atuais
var agora = new Date();

// Obtém a hora atual do objeto Date
var hora = agora.getHours();

// Verifica se a hora é menor que 12
if (hora < 12) {
    console.log('Bom dia!'); // Imprime "Bom dia!" no console se a condição for verdadeira
} else if (hora < 18) {
    console.log('Boa tarde!'); // Imprime "Boa tarde!" no console se a condição for verdadeira
} else {
    console.log('Boa noite!'); // Imprime "Boa noite!" no console se nenhuma das condições anteriores for verdadeira
}