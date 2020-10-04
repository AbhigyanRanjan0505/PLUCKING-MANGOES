class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly() {
        this.sling.bodyA = null;
    }
    display() {
        image(this.img1, 200, 20);
        image(this.img2, 170, 20);
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("#301608");
            if (pointA.x < 220) {
                strokeWeight(4);
                line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 26, pointB.y);
            }
            else {
                strokeWeight(4);
                line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 26, pointB.y);
            }
            pop();
        }
    }

}