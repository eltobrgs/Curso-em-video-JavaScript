function verificar() {
    var data = new Date(); // Cria um objeto Date para obter a data atual
    var ano = data.getFullYear(); // Obtém o ano atual a partir do objeto Date
    var fAno = document.getElementById("txtano"); // Obtém o elemento de input com o id "txtano"
    var res = document.querySelector("div#result"); // Obtém o elemento div com o id "result"

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("Verifique os dados e tente novamente"); // Exibe um alerta se o campo de input estiver vazio ou se o valor inserido for maior que o ano atual
    } else {
        var fsex = document.getElementsByName("radsex"); // Obtém os elementos de input com o nome "radsex"
        var idade = ano - Number(fAno.value); // Calcula a idade subtraindo o ano atual pelo valor inserido no campo de input
        var genero = ''; // Variável para armazenar o gênero começa vazia (sem valor)
        var img = document.createElement("img"); // Cria um elemento de imagem

        img.setAttribute("id", "foto"); // Define o atributo "id" do elemento de imagem como "foto"

        if (fsex[0].checked) {
            genero = "masculino"; // Define o gênero como "masculino" se o primeiro elemento de input estiver marcado
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "img/baby-male.jpg"); // Define o atributo "src" do elemento de imagem como o caminho para a imagem de uma criança masculina
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "img/young-male.jpg"); // Define o atributo "src" do elemento de imagem como o caminho para a imagem de um jovem masculino
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "img/adult-male.jpg"); // Define o atributo "src" do elemento de imagem como o caminho para a imagem de um adulto masculino
            } else {
                // Idoso
                img.setAttribute("src", "img/elder-male.jpg"); // Define o atributo "src" do elemento de imagem como o caminho para a imagem de um idoso masculino
            }
        } else if (fsex[1].checked) {
            genero = "feminino"; // Define o gênero como "feminino" se o segundo elemento de input estiver marcado
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "img/baby-female.jpg"); // Define o atributo "src" do elemento de imagem como o caminho para a imagem de uma criança feminina
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "img/young-female.jpg"); // Define o atributo "src" do elemento de imagem como o caminho para a imagem de uma jovem feminina
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "img/adult-female.jpg"); // Define o atributo "src" do elemento de imagem como o caminho para a imagem de uma adulta feminina
            } else {
                // Idoso
                img.setAttribute("src", "img/elder-female.jpg"); // Define o atributo "src" do elemento de imagem como o caminho para a imagem de uma idosa feminina
            }
        }

        res.style.textAlign = "center"; // Define o alinhamento do texto dentro do elemento div como centralizado
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos!`; // Define o conteúdo HTML do elemento div com uma mensagem que inclui o gênero e a idade
        res.appendChild(img); // Adiciona o elemento de imagem como filho do elemento div
    }
}