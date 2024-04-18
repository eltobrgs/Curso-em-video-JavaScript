function carregar() {
    var agora = new Date();
    var hora = agora.getHours();
    var saudacao = document.getElementsByTagName('p')[1];
    var horario = document.getElementsByTagName('p')[0];
    horario.innerHTML = `Agora são <strong>${hora}</strong> horas.`;
    var imagemDoDia = document.getElementById('imagemDoDia');
    var background = document.getElementsByTagName('body')[0];
    
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