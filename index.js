var numberBlocks = 6;
var colours = randomColours(numberBlocks);
var colorpicked = pickedColor();
var message = document.querySelector("#message");
var blocksJS = document.querySelectorAll(".blocks");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var hardButton = document.querySelector("#modeHard");
var easyButton = document.querySelector("#modeEasy");

gameStart();

function gameStart() {
  colorDisplay.textContent = colorpicked;
  setupBlocks();
  changeToHard();
}

function setupBlocks() {
  for (var i = 0; i < blocksJS.length; i++) {
    blocksJS[i].style.backgroundColor = colours[i];
    blocksJS[i].addEventListener("click", function () {
      var clickedcolor = this.style.backgroundColor;
      if (clickedcolor === colorpicked) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again!";
        changeColor(clickedcolor);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function changeColor(color) {
  for (var j = 0; j < blocksJS.length; j++) {
    blocksJS[j].style.backgroundColor = color;
    h1.style.backgroundColor = color;
  }
}

function pickedColor() {
  var randomColorNumber = Math.floor(Math.random() * colours.length);
  return colours[randomColorNumber];
}

function randomColours(number) {
  var colorArray = [];
  for (var k = 0; k < number; k++) {
    colorArray.push(randomColor());
  }
  return colorArray;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = "rgb(" + r + ", " + g + ", " + b + ")";
  return color;
}

resetButton.addEventListener("click", function () {
  reset();
});

function reset() {
  colours = randomColours(numberBlocks);
  colorpicked = pickedColor();
  colorDisplay.textContent = colorpicked;
  setupBlocks();
  resetButton.textContent = "New Color";
  message.textContent = "";
  h1.style.backgroundColor = "#2c8e99";
}

hardButton.addEventListener("click", function () {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  changeToHard();
});

function changeToHard() {
  numberBlocks = 6;
  for (var h = 0; h < blocksJS.length; h++) {
    blocksJS[h].style.backgroundColor = colours[h];
    if (blocksJS[h].style.display === "none") {
      blocksJS[h].style.display = "block";
    }
  }
  reset();
}

easyButton.addEventListener("click", function () {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  changeToEasy();
});

function changeToEasy() {
  numberBlocks = 3;
  for (var e = 0; e < blocksJS.length; e++) {
    blocksJS[e].style.backgroundColor = colours[e];
    if (e > 2) {
      blocksJS[e].style.display = "none";
    }
  }
  reset();
}
