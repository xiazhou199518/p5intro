//var n;
let bug;

function setup(){
    createCanvas(720,480);
    //background(0);
    //n = random(10);

    bug = new Jitter();
    }
    
function draw (){
    background(50,89,100);
    //ellipse(n,height/2, 20);
    //n += 5;
    //console.log(n);
    bug.display();
    bug.move();
}

class Jitter{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.diameter = (10, 30);
        this.speed = 1;
    }

    display(){
        ellipse(this.x,this.y, this.diameter, this.diameter);
    }

    move(){
        this.x += random(-this.speed, this.speed);
    }
}