const verses = [
  "Te encontrei no detalhe.",
  "No jeito calmo de ficar.",
  "No silêncio que abraça.",
  "No riso que me faz ficar.",
  "Cada parte de mim escolhe você."
];

const cardsContainer = document.getElementById("cards");
const nextBtn = document.getElementById("nextBtn");
const themeBtn = document.getElementById("themeBtn");

let index = 0;

// revelar cartinhas
nextBtn.addEventListener("click", () => {
  if (index < verses.length) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = verses[index];
    cardsContainer.appendChild(card);
    index++;

    if (index === verses.length) {
      nextBtn.textContent = "Tudo que eu sentia 🤍";
    }
  }
});

// trocar tema
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  themeBtn.textContent =
    document.body.classList.contains("dark")
      ? "☀️ Mudar tema"
      : "🌙 Mudar tema";
});
