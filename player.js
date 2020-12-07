class Player{
    constructor(){
    this.index=null
    this.name=null
    this.distance=0
    }
 getPlayerCount(){
     var playerCountReference=database.ref('playerCount');
     playerCountReference.on("value",function(data){playerCount=data.val();})
 }
 updatePlayerCount(){
     database.ref('/').update({playerCount:playerCount})
  
 }
 updatePlayerinfo(){
     var playerIndex="players/player"+this.index
     database.ref(playerIndex).set({Name:this.name,distance:this.distance})
 }
}