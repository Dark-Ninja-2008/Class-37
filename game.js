class Game{
    constructor(){

    }
getGameState(){
var gameStatereference=database.ref('gamestate');
gameStatereference.on("value",function(data){gameState=data.val();})
}
setGameState(state){
database.ref('/').update({gamestate:state})
}
start(){
 if(gameState===0){
 player= new Player();
 player.getPlayerCount();
 form = new Form();
 form.display();
    }
 }
 play(){
console.log("insideplay");
form.hide();
 }
}
