const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ball;
var ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var options={
        restitution: 0.5
    }

var ball2_options={
    restitution:1
}

ball=Bodies.circle(200,300,10,options);
ball2=Bodies.circle(300,300,20,ball2_options);

World.add(world,ball);
World.add(world,ball2);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,10,10);
    ellipse(ball2.position.x,ball2.position.y,20,20);
}