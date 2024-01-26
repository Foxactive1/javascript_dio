Jogo de Aventura e Calculadora de Partidas Ranqueadas
Este repositório contém um jogo de aventura em JavaScript que implementa uma classe Heroi com propriedades como nome, idade e tipo, juntamente com um método atacar() que permite que o herói execute ataques com base em seu tipo. Além disso, também inclui uma Calculadora de Partidas Ranqueadas que determina o nível de um jogador com base em suas vitórias e derrotas em partidas ranqueadas.

Funcionalidades
Jogo de Aventura: Classe Heroi
Criação de um herói com nome, idade e tipo.
Ataque do herói com base em seu tipo.
Calculadora de Partidas Ranqueadas
Cálculo do nível do jogador com base no saldo de vitórias em partidas ranqueadas.
Como Usar
Clone este repositório em sua máquina local:

bash
Copy code
git clone https://github.com/seu_usuario/seu_repositorio.git
Navegue até o diretório do projeto:

bash
Copy code
cd seu_repositorio
Jogo de Aventura
Abra o arquivo heroi.js em um editor de código para visualizar o código-fonte.

Execute o código em um ambiente JavaScript de sua escolha para testar a funcionalidade da classe Heroi.

Calculadora de Partidas Ranqueadas
Abra o arquivo calcularNivel.js em um editor de código para visualizar o código-fonte.

Execute o código em um ambiente JavaScript de sua escolha para testar a funcionalidade da calculadora.

Exemplo de Uso
Jogo de Aventura
javascript
Copy code
// Importe a classe Heroi
const Heroi = require('./heroi');

// Crie um novo herói
const meuHeroi = new Heroi('Aragorn', 35, 'guerreiro');

// Faça o herói atacar
meuHeroi.atacar(); // Saída: O guerreiro atacou usando espada
Calculadora de Partidas Ranqueadas
javascript
Copy code
// Defina as vitórias e derrotas do jogador
const vitorias = 95;
const derrotas = 25;

// Chama a função calcularNivel para obter o resultado
const resultado = calcularNivel(vitorias, derrotas);

// Exibe o resultado no console
console.log(resultado);
Contribuição
Contribuições são bem-vindas! Se você quiser melhorar este projeto de alguma forma, sinta-se à vontade para enviar uma pull request.

Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.

Lembre-se de substituir seu_usuario e seu_repositorio pelos seus detalhes específicos do GitHub. Se você estiver usando uma estrutura de diretórios diferente ou outros nomes de arquivos, ajuste as instruções de acordo.

