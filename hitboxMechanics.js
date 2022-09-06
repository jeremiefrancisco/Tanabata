//default hitbox design
mc.strokeStyle = 'blue';
mc.strokeRect(mcPositionX1, mcPositionY1, 50, 60);

opp.strokeStyle = 'red';
opp.strokeRect(opponentX1, opponentY1, 50, 60);

obj.strokeStyle = "green";
obj.strokeRect(objPositionX1, objPositionY1, 30, 30);

//hitbox related functions
function objectHitbox() {
  if(pickUpSword == false) {
  obj.strokeStyle = "green";
  obj.strokeRect(objPositionX1, objPositionY1, 30, 30);
}
}
function mainHitbox() {
  mc.strokeStyle = 'blue';
  mc.strokeRect(mcPositionX1, mcPositionY1, 50, 60);
}
function opponentHitbox() {
  opp.strokeStyle = 'red';
  opp.strokeRect(opponentX1, opponentY1, 50, 60);
  if(
    opponentX2>mcPositionX1 &&
    opponentX1<mcPositionX2 &&
    opponentY1<mcPositionY2 &&
    opponentY2>mcPositionY1
  ) {
mcHealth -= 1;
}
}
