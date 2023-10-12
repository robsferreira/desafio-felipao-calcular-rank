// Exemplo de uso
const vitorias = 87;
const derrotas = 7;

// Calcula o saldo de vitórias
  const saldoVitorias = vitorias - derrotas;

const nivel = calcularNivel(vitorias, derrotas);

function calcularNivel(vitorias, derrotas) {
  
  // Define o nível do jogador
  let nivel = "Ferro";
  if (saldoVitorias <= 10) {
    nivel = "Ferro";
  } else if (saldoVitorias <= 21) {
    nivel = "Bronze";
  } else if (saldoVitorias <= 51) {
    nivel = "Prata";
  } else if (saldoVitorias <= 81) {
    nivel = "Ouro";
  } else if (saldoVitorias <= 91) {
    nivel = "Diamante";
  } else if (saldoVitorias <= 101) {
    nivel = "Lendário";
  }
  else if (saldoVitorias <= 101) {
    nivel = "Imortal";
  }

  return nivel;
}

console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`);