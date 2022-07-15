let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let canvas1 = document.getElementById('myCanvas1');
let ctx1 = canvas1.getContext('2d');

let midXCanvas = 350;
let midYCanvas = 225;

ctx.strokeStyle = 'blue';
ctx.strokeRect(midXCanvas-50, midYCanvas-50, 100, 100);

//main characters hitbox
function main() {
  ctx.strokeStyle = 'blue';
  ctx.strokeRect(midXCanvas-50, midYCanvas-50, 100, 100);
}
//brings the inventory on screen
function inventoryBox() {
  ctx1.strokeStyle = 'red';
  ctx1.strokeRect(midXCanvas-300, midYCanvas-200, 600, 400);
}
//movement keys
function left() {
ctx.clearRect(0,0,900,450);
midXCanvas -= 10;
main();
}
function right() {
ctx.clearRect(0,0,900,450);
midXCanvas += 10;
main();
}
function up() {
ctx.clearRect(0,0,900,450);
midYCanvas -= 10;
main();
}
function down() {
ctx.clearRect(0,0,900,450);
midYCanvas += 10;
main();
}
let inventoryCount = 0;
//inventory function
function inventory() {
inventoryBox();
inventoryCount += 1;
if(inventoryCount%2 == 0) {
ctx1.clearRect(0,0,900,450);
}
}
//switch case for function keys
window.addEventListener("keypress", (event) => {
    switch (event.key) {
        case "a":
            left();
            break;
        case "d":
            right();
            break;
        case "w":
            up();
            break;
        case "s":
            down();
            break;
        case "i":
            inventory();
            break;
    }
});
