const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

let flippedCards = [];
let clickDisabled = false; // to prevent clicks while evaluating

// Helper function to shuffle the array
function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {
  if (clickDisabled) return; // Ignore clicks if already evaluating

  let card = event.target;
  if (card === flippedCards[0]) return; // Ignore clicks on already flipped cards

  card.style.backgroundColor = card.classList[0]; // Change background color
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    clickDisabled = true; // Disable clicks while evaluating

    let [card1, card2] = flippedCards;

    if (card1.classList[0] === card2.classList[0]) {
      // Matching cards
      setTimeout(() => {
        card1.removeEventListener("click", handleCardClick);
        card2.removeEventListener("click", handleCardClick);
        flippedCards = [];
        clickDisabled = false;
      }, 1000);
    } else {
      // Not matching cards
      setTimeout(() => {
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        flippedCards = [];
        clickDisabled = false;
      }, 1000);
    }
  }
}

createDivsForColors(shuffledColors);
