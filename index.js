var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//  var randomImageSource = "images/" + "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
//or combine last 2 lines as var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
// var randomImageSource2 = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImageSource2);

//If Player One Wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}
