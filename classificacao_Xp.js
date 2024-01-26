// Função para classificar o nível do herói com base na experiência (XP)
function classificarHeroi(nome, xp) {
    // Define os limites de XP para cada nível
    const limitesXP = {
        1000: "Ferro",
        2000: "Bronze",
        5000: "Prata",
        7000: "Ouro",
        8000: "Platina",
        9000: "Ascendente",
        10000: "Imortal"
    };

    // Percorre os limites de XP e determina o nível do herói
    let nivel = "Radiante"; // Nível padrão para XP acima de 10000
    for (let limite in limitesXP) {
        if (xp <= limite) {
            nivel = limitesXP[limite];
            break;
        }
    }

    // Retorna a mensagem com o nome do herói e seu nível
    return `O Herói de nome ${nome} está no nível de ${nivel}`;
}

// Exemplo de uso da função
const nomeHeroi = "Aragorn";
const xpHeroi = 7500; // Exemplo de XP

const mensagemNivel = classificarHeroi(nomeHeroi, xpHeroi);
console.log(mensagemNivel);
