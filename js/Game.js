class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    
    if(gameState === 0){

      console.log("start Is Working");

      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();


    }
    car1 = createSprite(200,200);
    car2 = createSprite(400,200);
    car3 = createSprite(600,200);
    car4 = createSprite(800,200);

    car1.addImage(car1i);
    car2.addImage(car2i);
    car3.addImage(car3i);
    car4.addImage(car4i);

    cars = [car1, car2, car3, car4];
  }

  play(){

    form.hide();
    console.log("Play is Working");
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){

      background("brown");

      //imageMode(CENTER);
      image(track, 0, -4*displayHeight,displayWidth, 5*displayHeight);

      var index = 0;
      var x = 0;
      var y;

      
      for(var plr in allPlayers){

        index = index+1;
        x = x +200;

        y = displayHeight - allPlayers[plr].distance;

        cars[index-1].x = x;
        cars[index-1].y = y;

        if(index === player.index){

          //cars[index-1].shapeColor = "red";
          fill("red");
          ellipse(x, y, 70, 70);
          camera.position.x = displayWidth/2; 
          camera.position.y = cars[index-1].y;

        }
      }
      
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(player.distance>3800){
      
      player.playerRank +=1;
      console.log(player.playerRank);
      Player.updateRank(player.playerRank);
      gameState =2;
    }

    drawSprites();
  }

  end(){

    game.update(2);
    background("blue");
    console.log("game Ended");
    fill("white");
    stroke(4);
    textSize(40);
    text("Game Ended", 200, -3200);   

  }
}
