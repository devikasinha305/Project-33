const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var snowflake1, snowflake2;
var bgImage, snowflakeImage1, snowflakeImage2;
var world; 

function preload(){
  bgImage = loadImage("snow3.jpg");
 snowflakeImage1 = loadImage("snow5.webp");
 snowflakeImage2 = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  rectMode(CENTER);
   engine = Engine.create();
   world = engine.world; 

  snowflake1 = new SnowFlake(400, 200, 50);
  snowflake1.addImage(snowflakeImage1);
  snowflake1.scale = 0.05;

  snowflake2 = new SnowFlake(300, 300, 50);
  snowflake2.addImage(snowflakeImage2);
  snowflake2.scale = 0.05;
}

function draw() {
  background(bgImage);

  snowflake1.display();
  snowflake2.display();

  drawSprites();
}