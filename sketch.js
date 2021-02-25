const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {
    
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,height,1200,20)
    ground2 = new Ground(550,160,200,20)
    ground3 = new Ground(550,350,200,20)

    box1 = new BlueBox(480,150,20,30);
    box2 = new RedBox(505,150,20,30);
    box3 = new Box(530,150,20,30);
    box4 = new BlueBox(555,150,20,30);
    box5 = new RedBox(575,150,20,30);
    box6 = new Box(600,150,20,30);
    box7 = new BlueBox(625,150,20,30);
    box8 = new RedBox(490,130,20,30);
    box9 = new Box(515,130,20,30);
    box10 = new BlueBox(540,130,20,30);
    box11 = new RedBox(565,130,20,30);
    box12 = new Box(590,130,20,30);
    box13 = new BlueBox(615,130,20,30);
    box14 = new RedBox(610,75,20,30);
    box15 = new BlueBox(585,75,20,30);
    box16 = new RedBox(550,75,20,30);
    box17 = new Box(525,75,20,30);
    box18 = new BlueBox(500,75,20,30);

    box01 = new BlueBox(480,330,20,30);
    box02 = new RedBox(505,330,20,30);
    box03 = new Box(530,330,20,30);
    box04 = new BlueBox(555,330,20,30);
    box05 = new RedBox(575,330,20,30);
    box06 = new Box(600,330,20,30);
    box07 = new BlueBox(625,330,20,30);
    box08 = new RedBox(490,300,20,30);
    box09 = new Box(515,300,20,30);
    box010 = new BlueBox(540,300,20,30);
    box011 = new RedBox(565,300,20,30);
    box012 = new Box(590,300,20,30);
    box013 = new BlueBox(615,300,20,30);
    box014 = new RedBox(610,270,20,30);
    box015 = new BlueBox(585,270,20,30);
    box016 = new RedBox(550,270,20,30);
    box017 = new Box(525,270,20,30);
    box018 = new BlueBox(500,270,20,30);

    shape = new Shape(200,150,50,50);


    sling = new SlingShot(shape.body,{x:200,y:150});

}

function draw(){
    background("GREY");
    Engine.update(engine);
   

ground1.display();
ground2.display();
ground3.display();

box1.display();
box2 .display();
box3 .display();
box4 .display();
box5 .display();
box6 .display();
box7.display();
box8 .display();
box9 .display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();

box01 .display();
box02 .display();
box03 .display();
box04 .display();
box05 .display();
box06 .display();
box07 .display();
box08 .display();
box09 .display();
box010.display();
box011.display();
box012.display();
box013.display();
box014.display();
box015.display();
box016.display();
box017.display();
box018.display();

shape.display();
sling.display();
}
function mouseDragged(){

    Matter.Body.setPosition(shape.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly()
}

