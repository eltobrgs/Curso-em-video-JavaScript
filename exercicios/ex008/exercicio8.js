// Objetivo: Receber a velocidade de um carro, e se a velocidade for maior que 60 km/h, exibir uma mensagem dizendo que o motorista foi multado.
let vel = 100;
console.log(`A velocidade do seu carro é ${vel} km/h`);
if (vel > 60) {
    console.log('Você ultrapassou o limite de velocidade');
    console.log('Você foi multado!!!!');
} else {
    console.log('Você está dentro do limite de velocidade');
}

console.log('Dirija sempre com segurança!');