let mapBorder0x = 10;
let mapBorder1x = 75;
let mapBorder0y = 5;
let mapBorder1y = 40;
let mapBorder2y = 80;
let mapBorder2x = 130;
let mapBorder3x = 85;
let mapBorder3y = -2;
let mapBorder4x = 110;
let mapBorder4y = -10;
let mapBorder5x = 160;
let mapBorder5y = -40;
let mapBorder6x = 100;


bg.strokeStyle = "black";
bg.beginPath();
bg.moveTo(mapBorder0x,mapBorder0y);
bg.lineTo(mapBorder3x,mapBorder0y);
bg.lineTo(mapBorder3x,mapBorder3y);
bg.lineTo(mapBorder4x,mapBorder3y);
bg.lineTo(mapBorder4x,mapBorder4y);
bg.lineTo(mapBorder5x,mapBorder4y);
bg.lineTo(mapBorder5x,mapBorder5y);
bg.lineTo(mapBorder6x,mapBorder5y);
bg.lineTo(mapBorder0x,mapBorder0y);
bg.lineTo(mapBorder0x,mapBorder1y);
bg.lineTo(mapBorder1x,mapBorder1y);
bg.lineTo(mapBorder1x,mapBorder2y);
bg.lineTo(mapBorder2x,mapBorder2y);
bg.stroke();

function mapBorder() {
  if(leftKey == true) {
    mapBorder0x += 10;
    mapBorder1x += 10;
    mapBorder2x += 10;
    mapBorder3x += 10;
    mapBorder4x += 10;
    mapBorder5x += 10;
    mapBorder6x += 10;
  } else if(rightKey == true) {
    mapBorder0x -= 10;
    mapBorder1x -= 10;
    mapBorder2x -= 10;
    mapBorder3x -= 10;
    mapBorder4x -= 10;
    mapBorder5x -= 10;
    mapBorder6x -= 10;
  } else if(upKey == true) {
    mapBorder0y += 10;
    mapBorder1y += 10;
    mapBorder2y += 10;
    mapBorder3y += 10;
    mapBorder4y += 10;
    mapBorder5y += 10;
  } else if(downKey == true) {
    mapBorder0y -= 10;
    mapBorder1y -= 10;
    mapBorder2y -= 10;
    mapBorder3y -= 10;
    mapBorder4y -= 10;
    mapBorder5y -= 10;
  }
bg.strokeStyle = "black";
bg.beginPath();
bg.moveTo(mapBorder0x,mapBorder0y);
bg.lineTo(mapBorder3x,mapBorder0y);
bg.lineTo(mapBorder3x,mapBorder3y);
bg.lineTo(mapBorder4x,mapBorder3y);
bg.lineTo(mapBorder4x,mapBorder4y);
bg.lineTo(mapBorder5x,mapBorder4y);
bg.lineTo(mapBorder5x,mapBorder5y);
bg.lineTo(mapBorder6x,mapBorder5y);
bg.lineTo(mapBorder0x,mapBorder0y);
bg.lineTo(mapBorder0x,mapBorder1y);
bg.lineTo(mapBorder1x,mapBorder1y);
bg.lineTo(mapBorder1x,mapBorder2y);
bg.lineTo(mapBorder2x, mapBorder2y);
bg.stroke();

}
