//array that will hold all the items the player picks up
const userItems = [];

let inventoryLength = userItems.length;
let inventoryPlace = 1;
let inventoryUp = false;
let inventoryCount = 0;
let changingX = 80;
//brings the inventory on screen
function inventoryBox() {
  inv.strokeStyle = 'red';
  inv.strokeRect(50, 30, 600, 400);
  let i = 0;
  let changingX = 80;
  let multiplicationValue = 1;
  while(i<7) {
  i++
  inv.strokeStyle = "purple";
  inv.strokeRect(changingX*multiplicationValue, 40, 50, 60);
  multiplicationValue++;
}
}
function inventoryHighlight() {
    invS.restore();
    invS.clearRect(0, 0, 700, 450);
    invS.save();
    invS.lineWidth = 5;
    invS.strokeStyle = "yellow";
    changingX = changingX * inventoryPlace;
    invS.strokeRect(changingX, 40, 50, 60);

    changingX = 80;

}
//inventory function
function inventoryPopUp() {
  inventoryUp = true;
  inventoryBox();
  inventoryHighlight();
  inventoryAmount();
  inventoryCount += 1;
  if(inventoryCount%2 == 0) {
      inv.clearRect(0, 0, 900, 450);
      invS.clearRect(0, 0, 900, 450);
  inventoryUp = false;
}
}
//this will help the program see how many items are in the inventory
function inventoryAmount() {
  if(userItems.length == 1) {

  }
}
//this will allow the player to drop what's in their inventory
function dropInventoryItem() {
  pickUpSword = false;
  if(sword01 == true) {
    objPositionX1 = 370;
    objPositionY1 = 220;
    objectHitbox();

  } else {

  }
}
