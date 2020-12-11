class Invader{
  constructor(){
    //this.image = loadImage("invader1.png");
    this.y = 50;
    this.rowCount = 8;
    this.aliens = [];
  }
  createAleins(){
   var x = 50;
   var y = this.y;
    for(var i=0;i<this.rowCount;i++){
      x = x+50;
      y = this.y;
      for(var j=0;j<8;j++){
       this.aliens.push(new alien(x,y,30,30))
        y = y+40;
      }
    }
  }
  display(){
   var numberofaliens = this.rowCount*8;
    for(var i=0;i<numberofaliens;i++){
      if(this.aliens[i]){
        this.aliens[i].initializeAlien();
      } 
    }
  }
  checkCollision(x,y){
   for(var i=this.aliens.length-1;i>=0;i--){
       var CurrentAlien = this.aliens[i]
      // console.log(dist(x,y,CurrentAlien.x,CurrentAlien.y))
       if(dist(x,y,CurrentAlien.x,CurrentAlien.y)<3){
         this.aliens.splice(i,1)
         console.log("hi")
         return true;
       }
    }
   return false;
  }
}