let main = document.getElementById("display");
let cards = document.getElementById("cards");
let add = document.getElementById("sum");
let card1 = any();
let card2 = any();
let sum = card1 + card2;
let show = [card1, card2];
let message = "";
let isalive = false;
let won = false;

function any() {
  let randomnum = Math.floor(Math.random() * 13) + 1;
  console.log(randomnum);

  if (randomnum > 10) {
    return 10;
  } else if (randomnum == 1) {
    return 11;
  } else {
    return randomnum;
  }
}

function startgame() {
  isalive = true;

  game();
}

function game() {
  cards.textContent = "Cards : ";
  for (let i = 0; i < show.length; i++) {
    cards.textContent += show[i] + " ";
  }
  add.textContent = "Sum : " + sum;

  if (sum <= 20) {
    message = "Do you want a new card ?";
  } else if (sum === 21) {
    message = "You've got a BlackJack !";
    won = true;
  } else {
    message = "You are out of the game !";
    isalive = false;
  }

  main.textContent = message;
}

function newcard() {
  if (isalive === true && won === false) {
    let card3 = any();
    sum += card3;
    show.push(card3);
    game();
  }
}

function resetgame() {
  location.reload();
}
