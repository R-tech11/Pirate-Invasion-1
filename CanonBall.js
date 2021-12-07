class CanonBall
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;

        var options = {
         isStatic: true
        }

        this.r = 30;

        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);

        this.image = loadImage("assets/cannonBall.png");
    }

    display()
    {
        push();
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r)

        pop();
    }

    shoot()
    {
        var newAngle = canon.angle - 25;
        newAngle = newAngle * (3.14/180);
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);


        Matter.Body.setStatic(this.body,false);

        Matter.Body.setVelocity(this.body, {
            x:velocity.x * (180/3.14), 
            y:velocity.y * (180/3.14)});
    }
}