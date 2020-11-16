const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	stone= new Stone(100,250);
    slingshot=new SlingShot(stone.body,{x:100,y:250});
	girl=new Girl(150,320,150,150)
    ground=new Ground(400,380,800,50)
    tree=new Tree(620,200,400,400)
    mango1=new Mango(620,100,10,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  slingshot.display()
  girl.display()
  stone.display()
  ground.display()
  tree.display()
  mango1.display()
  detectollision(stone,mango1)
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function detectollision(Lstone,Lmango){
   mangoBodyPosition-Lmango.body.position 
   stoneBodyPosition-Lmango.body.position 

   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)
    if(distance<=Lmango.r+Lstone.r){
        matter.Body.setStatic(lmango.body,false);
    }
}
