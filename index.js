var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randNum2 + ".png");

var h1 = document.querySelector("h1");

if (randNum1 > randNum2){
  h1.innerText = "Player 1 Wins!";
}
else if (randNum1 < randNum2){
  h1.innerText = "Player 2 Wins!";
}else{
  h1.innerText = "Draw!";
}
