// Player name
  var player1 = "Player 1";
  var player2 = "Player 2";
  var player3 = "Player 3";
  var player4 = "Player 4";

  // Function to change the player name
  function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");
    player3 = prompt("Change Player3 name");
    player4 = prompt("Change player4 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
    document.querySelector("p.Player3").innerHTML = player3;
    document.querySelector("p.Player4").innerHTML = player4;
  }

  // Function to roll the dice
  function rollTheDice() {
    setTimeout(function () {
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
      var randomNumber3 = Math.floor(Math.random() * 6) + 1;
      var randomNumber4 = Math.floor(Math.random() * 6) + 1;
      console.log(randomNumber1, randomNumber2, randomNumber3, randomNumber4);

      document
        .querySelector(".img1")
        .setAttribute("src", "assets/dice" + randomNumber1 + ".png");

      document
        .querySelector(".img2")
        .setAttribute("src", "assets/dice" + randomNumber2 + ".png");

      document
        .querySelector(".img3")
        .setAttribute("src", "assets/dice" + randomNumber3 + ".png");

      document
        .querySelector(".img4")
        .setAttribute("src", "assets/dice" + randomNumber4 + ".png");

      if (
        randomNumber1 >= randomNumber2 &&
        randomNumber1 >= randomNumber3 &&
        randomNumber1 >= randomNumber4
      ) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";

        // Player 2 Wins
      } else if (
        randomNumber2 >= randomNumber3 &&
        randomNumber2 >= randomNumber1 &&
        randomNumber2 >= randomNumber4
      ) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";

        // Player 3 Wins
      } else if (
        randomNumber3 >= randomNumber4 &&
        randomNumber3 >= randomNumber2 &&
        randomNumber3 >= randomNumber4
      ) {
        document.querySelector("h1").innerHTML = "Player 3 Wins!";

        //Player 4 Wins
      } else {
        document.querySelector("h1").innerHTML = "Player 4 wins!";

        // Draw condition
      }
      if (
        randomNumber1 === randomNumber2 &&
        randomNumber2 === randomNumber3 &&
        randomNumber3 === randomNumber4 &&
        randomNumber4 === randomNumber1
      ) {
        document.querySelector("h1").innerHTML = "Draw";
      }
    }, 2500)
  }