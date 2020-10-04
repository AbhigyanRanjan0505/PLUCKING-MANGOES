//name spaceing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);

  ground1=new Ground(200,200,200,50);
}

function draw() {
  background(0);  

  ground1.display();

  drawSprites();
}