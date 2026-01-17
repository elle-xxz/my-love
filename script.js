const cartas = [
  "Não foi acaso. Foi sentimento.",
  "Te encontrei nos detalhes simples.",
  "O coração reconhece o que é dele.",
  "Algumas conexões não pedem explicação.",
  "Você virou calma em meio ao caos."
];

let indice = 0;

function revelar(){
  const texto = document.getElementById("texto");

  if(indice < cartas.length){
    texto.innerHTML = cartas[indice];
    indice++;
  }else{
    texto.innerHTML = "💗 Fim da carta 💗";
  }
}

function trocarTema(){
  document.body.classList.toggle("tema-noite");
  document.body.classList.toggle("tema-rosa");
}
