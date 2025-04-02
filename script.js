function escolha(){
    for (rodada = 1; rodada <= 3; rodada++){
        escolhaJogador = prompt("Nivel: " + rodada + ", escolha um vidro (1, 2 ou 3): ");
        if (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3) {
            alert("Escolha inválida! Tente novamente.");
            return escolha();
        }
        pisoQuebrado = Math.floor(Math.random() * 3) + 1;
        if (escolhaJogador == pisoQuebrado) {
            alert("Você quebrou o vidro, e perdeu!");
            break;
        }
        else {
            alert("Você não quebrou o vidro, continue!");
        }
        alert ("O piso quebrado era o: " + pisoQuebrado);
        if (rodada == 3) {
            alert("Você pisou nos vidros certos e ganhou!");
            break;
        }
    }
}
