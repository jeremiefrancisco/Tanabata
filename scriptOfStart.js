let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let background = new Image();
background.src = "images/start/startBackground.png";
background.onload = function drawBackground() {
ctx.drawImage(background,0,0,700,450);
}
function mainMenu() {
   location.replace("indexOfCustomization.html");
}

window.addEventListener("keypress", (event) => {
    switch (event.key) {
        case "Enter":
            mainMenu();
            break;
    }
});
