const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var AB;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    pig1 = new pig(795, 320)
    box2 = new Box(885,320,70,70);
    
    log1 = new log(795, 280, 300, PI/2);
    
    box3 = new Box(700, 260, 70, 70);
    pig2 = new pig(795, 260)
    box4 = new Box(885, 260, 70, 70);
    
    log2 = new log(795, 220, 300, PI/2);

    log3 = new log(750, 150, 150, PI/4);
    box5 = new Box(795, 200, 70, 70);
    log4 = new log(850, 150, 150, -PI/4);

    AB = new birds(100, 200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    ground.display();

    box1.display();
    pig1.display();
    box2.display();

    log1.display();

    box3.display();
    pig2.display();
    box4.display();

    log2.display();

    log3.display();
    box5.display();
    log4.display();

    AB.display();
}