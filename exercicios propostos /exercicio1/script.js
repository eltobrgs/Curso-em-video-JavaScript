function carregar() {
    // Obtém a data e hora atual
    var agora = new Date();
    // Obtém a hora atual
    var hora = agora.getHours();
    // Obtém a segunda tag <p> do documento
    var saudacao = document.getElementsByTagName('p')[1];
    // Obtém a primeira tag <p> do documento
    var horario = document.getElementsByTagName('p')[0];
    // Define o conteúdo da primeira tag <p> com a hora atual
    horario.innerHTML = `Agora são <strong>${hora}</strong> horas.`;
    // Obtém o elemento de imagem com o ID 'imagemDoDia'
    var imagemDoDia = document.getElementById('imagemDoDia');
    // Obtém o elemento <body> do documento
    var background = document.getElementsByTagName('body')[0];
    
    // Verifica a hora atual e define a saudação, imagem e cor de fundo correspondentes
    if (hora < 5) {
        saudacao.innerHTML = 'Boa madrugada!';
        imagemDoDia.src = 'image/madrugada.png';
        background.style.backgroundColor = '#030443';
    } else if (hora < 12) {
        saudacao.innerHTML = 'Bom dia!';
        imagemDoDia.src = 'image/dia.png';
        background.style.backgroundColor = '#fff';
    } else if (hora < 18) {
        saudacao.innerHTML = 'Boa tarde!';
        imagemDoDia.src = 'image/tarde.png';
        background.style.backgroundColor = '#b25a08';
    } else {
        saudacao.innerHTML = 'Boa noite!';
        imagemDoDia.src = 'image/noite.png';
        background.style.backgroundColor = '#474948';
    }
}