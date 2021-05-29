class Ground{
constructor(x, y, w, h ){
    var options = {
        isStatic : true
    }
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.ground = Bodies.rectangle(x,y,w,h,options)
    World.add(world, this.ground)
}
display(){
   var pos = this.ground.position
   push()
   fill("brown")
   rectMode(CENTER);
   rect(pos.x , pos.y, this.w, this.h)
   pop()
}

}