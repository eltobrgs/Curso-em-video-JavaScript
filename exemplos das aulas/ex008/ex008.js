// Objetivo: Receber a velocidade de um carro, e se a velocidade for maior que 60 km/h, exibir uma mensagem dizendo que o motorista foi multado.

// Definindo a velocidade do carro como 100 km/h
let vel = 100;

// Exibindo a velocidade do carro na tela
console.log(`A velocidade do seu carro é ${vel} km/h`);

// Verificando se a velocidade é maior que 60 km/h
if (vel > 60) {
    // Se a velocidade for maior que 60 km/h, exibir uma mensagem de ultrapassagem do limite de velocidade
    console.log('Você ultrapassou o limite de velocidade');
    console.log('Você foi multado!!!!');
} else {
    // Se a velocidade for igual ou menor que 60 km/h, exibir uma mensagem de que está dentro do limite de velocidade
    console.log('Você está dentro do limite de velocidade');
}

// Exibindo uma mensagem final
console.log('Dirija sempre com segurança!');