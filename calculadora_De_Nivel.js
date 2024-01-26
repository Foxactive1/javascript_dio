// Definição da função para calcular o nível do jogador com base no saldo de vitórias
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias subtraindo as derrotas das vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Tabela de referência para determinar o nível com base no saldo de vitórias
    const tabelaNiveis = {
        10: "Ferro",
        20: "Bronze",
        50: "Prata",
        80: "Ouro",
        90: "Diamante",
        100: "Lendário",
        Infinity: "Imortal"
    };

    // Percorre a tabela de referência e determina o nível com base no saldo de vitórias
    for (let limite in tabelaNiveis) {
        if (saldoVitorias <= parseInt(limite)) {
            nivel = tabelaNiveis[limite];
            break;
        }
    }

    // Retorna uma mensagem com o saldo de vitórias e o nível do jogador
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Função principal para execução do programa
function main() {
    // Defina as vitórias e derrotas do jogador
    const vitorias = 98;
    const derrotas = 1;

    // Chama a função calcularNivel para obter o resultado
    const resultado = calcularNivel(vitorias, derrotas);

    // Exibe o resultado no console
    console.log(resultado);
}

// Chama a função principal para iniciar a execução do programa
main();
