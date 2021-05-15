var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1, car2, car3, car4;
var cars=[];


var form, player, game;

function preload(){

  car1i = loadImage("images/car1.png");
  car2i = loadImage("images/car2.png");
  car3i = loadImage("images/car3.png");
  car4i = loadImage("images/car4.png");

  track = loadImage("images/track.jpg");
  //track = loadImage("track.jpg");


}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  console.log(gameState);
  game.start();
  console.log (displayHeight);
}



function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();

    game.play();
  }if(gameState === 2){
    game.end();
  }

  
}
