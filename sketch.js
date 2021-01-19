var canvas;
var music;
var surface1,surface2,surface3,surface4,box;
var Edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(0,580,360,30)
surface2=createSprite(295,580,200,30)
surface3=createSprite(515,580,200,30)
surface4=createSprite(740,580,220,30)
box=createSprite(random(20,750,100,40,40))
surface1.shapeColor="red";
surface2.shapeColor="green";
surface3.shapeColor="blue";
surface4.shapeColor="pink";
box.shapeColor="black";
    //create box sprite and give velocity
box.velocityY=5;
box.velocityX=3;
}

function draw() {
    background("white");
    // box.x=mouseX;
   // box.y=mouseY;
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
box.shapeColor="red";
music.play();
    }
   
    if(surface2.isTouching(box)){
        box.shapeColor="green";
        music.stop();
       }
 
 if(surface3.isTouching(box)){
     box.shapeColor="blue";
      }
 
     if(surface4.isTouching(box)){
       box.shapeColor="pink";
                        }
       
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges)

drawSprites();
    //add condition to check if box touching surface and make it box
}
