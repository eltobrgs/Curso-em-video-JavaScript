// Crie um novo objeto Date para obter a data e hora atual
var agora = new Date();

// Obtenha o dia da semana a partir do objeto Date
var dia = agora.getDay();

// Use uma declaração switch para verificar o valor da variável dia
switch (dia) {
    case 0:
        console.log('Domingo'); // Se o dia for 0, imprima 'Domingo'
        break;
    case 1:
        console.log('Segunda'); // Se o dia for 1, imprima 'Segunda'
        break;
    case 2:
        console.log('Terça'); // Se o dia for 2, imprima 'Terça'
        break;
    case 3:
        console.log('Quarta'); // Se o dia for 3, imprima 'Quarta'
        break;
    case 4:
        console.log('Quinta'); // Se o dia for 4, imprima 'Quinta'
        break;
    case 5:
        console.log('Sexta'); // Se o dia for 5, imprima 'Sexta'
        break;
    case 6:
        console.log('Sábado'); // Se o dia for 6, imprima 'Sábado'
        break;
    default:
        console.log('[ERRO] Dia inválido!'); // Se o dia não estiver entre 0 e 6, imprima '[ERRO] Dia inválido!'
        break;
}