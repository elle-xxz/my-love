const verses = [
  "Te encontrei no detalhe.",
  "No jeito calmo de ficar.",
  "No silêncio que abraça.",
  "No riso que me faz ficar.",
  "Cada parte de mim escolhe você."
];

const cardsContainer = document.getElementById("cards");
const button = document.getElementById("nextBtn");
const themeBtn = document.getElementById("themeBtn");

let index = 0;

// começa no tema claro
document.body.classList.add("light");

// clique para revelar cartas
button.addEventListener("click", () => {
  if (index < verses.length) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = verses[index];
    cardsContainer.appendChild(card);
    index++;

    if (index === verses.length) {
      button.textContent = "Tudo que eu sentia 🤍";
    }
  }
});

// mudar tema
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
