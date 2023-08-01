var randomNumber1 = Math.floor( Math.random()*6 + 1);

var randomDice1Image = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDice1Image;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor( Math.random()*6 + 1 );

var randomDice2Image = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDice2Image;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}