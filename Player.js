class Player{
  constructor(){
      this.image = loadImage("shooter.png");
      this.x = width/2;
      this.y = height-40;
      this.lives = 3;
      this.score = 0;
      this.bullets = []
  }
  display(){
   image(this.image,this.x,this.y,40,40);
  }
  moveRight(){
      this.x = this.x + 10;
  }
  moveLeft(){
    this.x = this.x - 10;
  }
  shoot(){
    var bullet = new Bullet(this.x,this.y);
    //bullet.velocity.X = 10;
    this.bullets.push(bullet);
  }
  draw(){
     for(let bullet of this.bullets){
       bullet.draw();
       bullet.y = bullet.y-10;
       //this.updateBullets(bullet.x,bullet.y)
     }
  }
  hasHitAlien(bullet){
   return invader.checkCollision(bullet.x,bullet.y);
  }
  updateBullets(){
     //invader.checkCollision(x,y)
     for(var i = this.bullets.length-1;i>=0;i--){
       var currentBullet = this.bullets[i]
       if(this.hasHitAlien(currentBullet)){
         this.bullets.slice(i,1)
         break;
       }
     }
  }
}