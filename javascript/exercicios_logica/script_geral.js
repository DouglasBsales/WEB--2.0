function personagemMorreu(dano, saude) {
  if (dano - saude <= 0) {
    console.log("O personagem morreu com o ataque")
  } else{
    console.log("O personagem sobrebiveu ao ataque")
  }
};

personagemMorreu(100, 60);


