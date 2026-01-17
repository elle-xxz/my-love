const verses = [
  "Te encontrei no detalhe.",
  "No jeito calmo de ficar.",
  "No silêncio que abraça.",
  "No riso que me faz ficar.",
  "Cada parte de mim escolhe você."
];

let index = 0;

const cardsDiv = document.getElementById("cards");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("music");
const themeBtn = document.getElementById("themeBtn");

nextBtn.addEventListener("click", () => {
  if (index === 0) {
    music.volume = 0.4;
    music.play();
  }

  if (index < verses.length) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = verses[index];
    cardsDiv.appendChild(card);
    index++;
  } else {
    nextBtn.textContent = "✨ Poema completo";
    nextBtn.disabled = true;
  }
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
