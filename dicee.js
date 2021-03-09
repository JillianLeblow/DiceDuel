let diceRoll = () => {
  let player1Roll = Math.floor(Math.random() * 6) + 1;
  let player2Roll = Math.floor(Math.random() * 6) + 1;

  console.log(player1Roll);
  console.log(player2Roll);

  if (player1Roll > player2Roll) {
    document.querySelector("#winner-text").innerHTML = "<i class='fas fa-flag'></i> Player 1 Wins!";
  } else if (player1Roll < player2Roll) {
    document.querySelector("#winner-text").innerHTML = "Player 2 Wins! <i class='fas fa-flag'></i>";
  } else if (player1Roll === player2Roll) {
    document.querySelector("#winner-text").innerHTML = "Draw!";
  }

  if (player1Roll === 1) {
    document.querySelector(".p1-dice").src = "images/png/1y.png";
  } else if (player1Roll === 2) {
    document.querySelector(".p1-dice").src = "images/png/2y.png";
  } else if (player1Roll === 3) {
    document.querySelector(".p1-dice").src = "images/png/3y.png";
  } else if (player1Roll === 4) {
    document.querySelector(".p1-dice").src = "images/png/4y.png";
  } else if (player1Roll === 5) {
    document.querySelector(".p1-dice").src = "images/png/5y.png";
  } else if (player1Roll === 6) {
    document.querySelector(".p1-dice").src = "images/png/6y.png";
  }

  if (player2Roll === 1) {
    document.querySelector(".p2-dice").src = "images/png/1y.png";
  } else if (player2Roll === 2) {
    document.querySelector(".p2-dice").src = "images/png/2y.png";
  } else if (player2Roll === 3) {
    document.querySelector(".p2-dice").src = "images/png/3y.png";
  } else if (player2Roll === 4) {
    document.querySelector(".p2-dice").src = "images/png/4y.png";
  } else if (player2Roll === 5) {
    document.querySelector(".p2-dice").src = "images/png/5y.png";
  } else if (player2Roll === 6) {
    document.querySelector(".p2-dice").src = "images/png/6y.png";
  }
}

diceRoll();

// Originally had the button refreshing the page but changed it to simply run the function; no longer need this code:
// function refreshPage(){
//     window.location.reload();
// }
