class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.playerRank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  getRank(){
    var playerCountRef = database.ref('playerRank');
    playerCountRef.on("value",(data)=>{
      this.playerRank = data.val();
    })
  }

  static updateRank(count){
    console.log("update Rank is Working")
    database.ref('/').update({
      playerRank: count
    });


  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
