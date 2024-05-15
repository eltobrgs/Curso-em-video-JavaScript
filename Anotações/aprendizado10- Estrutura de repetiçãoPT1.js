// Exemplo de estrutura de repetição para comer pizza

// Definindo a quantidade de fatias de pizza
let quantidadeFatias = 8;

// Loop while: enquanto ainda houver fatias de pizza, continue comendo
while (quantidadeFatias > 0) {
    console.log("Comendo uma fatia de pizza...");
    quantidadeFatias--;
}

console.log("Acabaram as fatias de pizza!");

// Loop for: vamos comer mais pizza, mas agora com um limite de 10 fatias
for (let i = 1; i <= 10; i++) {
    console.log("Comendo uma fatia de pizza...");
}

console.log("Acabaram as fatias de pizza novamente!");

// Loop do-while: vamos comer pizza até ficarmos satisfeitos
let estouSatisfeito = false;
let contadorFatias = 0;

do {
    console.log("Comendo uma fatia de pizza...");
    contadorFatias++;

    if (contadorFatias >= 5) {
        estouSatisfeito = true;
    }
} while (!estouSatisfeito);

console.log("Estou satisfeito! Chega de pizza!");
