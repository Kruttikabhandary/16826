class Paper{
    constructor(x, y, radius){
        var options ={
        isStatic: false,
        'restituion':0.3,
        'friction':1.5,
        'density':1.2

        }
        this.body = Bodies.rectangle(x, y, radius, options)
        this.radius = radius;

        World.add(world, this.body)

    }
    display(){
       ellipseMode(RADIUS);
        fill("pink");
        circle(this.body.position.x, this.body.position.y, this.radius);
    }
}