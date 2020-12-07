var ball;
var form,player,game;
var playerCount;
var database;
var gameState=0;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    console.log("databaseConnected"+database);
    game = new Game();
    game.getGameState();
    game.start();
    //firebase.database(database);
}

function draw(){
    background("white");
    
    if(playerCount===4){
       game.setGameState(1);
       
    }

    if(gameState===1){
        clear();
        game.play()
    }
}


