let pickUpSword = false;
//this will tell the program if the character has a weapon
let sword01 = false;
//function that allows you to pick up items
function pickUp() {
  if(objPositionX1 == mcPositionX2) {
  sword01 = true;
  userItems.push(sword01);
  pickUpSword = true;
  obj.clearRect(0,0,700,450);
} else if(objPositionX2 == mcPositionX1) {
  sword01 = true;
  userItems.push(sword01);
  pickUpSword = true;
  obj.clearRect(0,0,700,450);
} else if(objPositionY1 == mcPositionY2) {
  sword01 = true;
  userItems.push(sword01);
  pickUpSword = true;
  obj.clearRect(0,0,700,450);
} else if(objPositionY2 == mcPositionY1) {
  sword01 = true;
  userItems.push(sword01);
  pickUpSword = true;
  obj.clearRect(0,0,700,450);

}
}
