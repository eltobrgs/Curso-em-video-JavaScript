function adcnumber() {
    let number = document.getElementById('number').value;
    let list = document.getElementById('result');
    let item = document.createElement('option');
    item.text = `Valor ${number} adicionado`;
    list.appendChild(item);
}

function analisar() {
    let list = document.getElementById('result');
    let items = list.getElementsByTagName('option');
    let qtd = items.length - 1;
    let maior = Number(items[1].text.split(' ')[1]);
    let menor = Number(items[1].text.split(' ')[1]);
    let soma = 0;

    for (let i = 1; i <= qtd; i++) {
        let valor = Number(items[i].text.split(' ')[1]);
        soma += valor;
        if (valor > maior) {
            maior = valor;
        }
        if (valor < menor) {
            menor = valor;
        }
    }

    let media = soma / qtd;

    let res = document.getElementById('res');
    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${qtd} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
}
    