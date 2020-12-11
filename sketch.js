var invader;
var player1;
function setup() {
  createCanvas(600,600);
   invader = new Invader();
   invader.createAleins();
   player1 = new Player();
}

function draw() {
  background(0);
  invader.display();
  player1.display();
  //keyPressed();
  player1.draw();
  player1.updateBullets();
}
function keyPressed(){
  if(keyCode === RIGHT_ARROW || keyCode === 88){

    player1.moveRight();
  }
  else if(keyCode === LEFT_ARROW || keyCode === 90){
     player1.moveLeft();
  }
  if(keyCode === 32){
    player1.shoot();
  }
}
