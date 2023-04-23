const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.style.transform === "rotateY(180deg)") {
      card.style.transform = "none";
    } else {
      card.style.transform = "rotateY(180deg)";
    }
  });
});
