class Form{
    constructor(){
      this.title=createElement('h2');  
      this.title.html('Car Race Game');
      this.input=createInput("Name...")
      this.button=createButton("Play")

    }
hide(){
  this.greeting.hide();
  this.button.hide();
  this.input.hide();
}
    display(){
      this.title.position(350,100);
      this.input.position(350,200);
      this.button.position(350,300);
      this.greeting=createElement('h2');
      this.greeting.position(250,300)

      this.button.mousePressed(()=>
      {player.name = this.input.value();
        playerCount=playerCount+1;
        player.index=playerCount;
        player.updatePlayerCount();
        player.updatePlayerinfo();
        console.log(player+playerCount);
        this.greeting.html('Hello there'+ player.name)
        console.log(player.name);
      })
  
    }

}