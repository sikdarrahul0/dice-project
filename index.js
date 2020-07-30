var randomNumber1 = 1 + Math.floor(Math.random() * 6);
var randomNumber2 = 1 + Math.floor(Math.random() * 6);

if(randomNumber1 > randomNumber2){
 document.getElementById('winner-announce').innerHTML = '🚩 Player 1 Wins!';
}
else if(randomNumber1 == randomNumber2){
  document.getElementById('winner-announce').innerHTML = 'Draw!'
}
else{
  document.getElementById('winner-announce').innerHTML = 'Player 2 Wins! 🚩';
}

var imageNumber1 = "images/dice" + randomNumber1 +".png";
var imageNumber2 = "images/dice" + randomNumber2 +".png";

document.getElementById('dice-img1').src = imageNumber1;
document.getElementById('dice-img2').src = imageNumber2;
