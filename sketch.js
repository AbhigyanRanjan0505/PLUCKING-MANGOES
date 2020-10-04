//name spaceing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//variables
var boyImg, boy;

function preload() {
	//loades images
	boyImg = loadImage("boy.png");
}

function setup() {
	//creates canvas
	createCanvas(800, 700);

	//creates a engine and claas world
	engine = Engine.create();
	world = engine.world;

	//Creates the bodies
	ground = new Ground(600, height, 1200, 20);
	tree = new Tree(590, 700);
	stone = new Stone(140, 600, 20, 20);
	launcher = new Launcher(stone.body, { x: 160, y: 600 });

	//creates a boy and its properties
	boy = createSprite(200, 640, 10, 10);
	boy.addImage(boyImg);
	boy.scale = 0.08;

	//Creates the bodies
	mango1 = new Mango(500, 300, 20);
	mango2 = new Mango(600, 300, 20);
	mango3 = new Mango(650, 330, 20);
	mango4 = new Mango(600, 250, 20);
	mango5 = new Mango(650, 250, 20);
	mango6 = new Mango(545, 384, 20);
	mango7 = new Mango(620, 348, 20);
	mango8 = new Mango(530, 233, 20);
	mango9 = new Mango(645, 237, 20);
	mango10 = new Mango(575, 250, 20);

	//runs the engine
	Engine.run(engine);
}

function draw() {
	//creates a rectangle at thr centre
	rectMode(CENTER);

	//creates a background
	background(230);

	//wrrites the text
	textSize(25);
	text("Press space to get more chances!!", 50, 50);

	//displays
	ground.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	launcher.display();
	stone.display();

	//detects Collisions
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);
	
	//draws all the sprites
	drawSprites();
}

function mouseDragged() {
	//moves with the mouse 
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	//breaks the collusion
	launcher.fly();
}

function detectCollision(lstone, lmango) {
	//sets position
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	//sets static to false
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	//resets the game
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 235, y: 420 })
		launcher.attach(stone.body);
	}
}