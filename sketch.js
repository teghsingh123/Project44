// Money Clicker Game
// Click on the money to earn 1 dollar per click
//Invest the money it items to increase moneyRate. 
//Become a millionaire to win.

var money, moneyImg, moneyCount,moneyperClick,moneySound;

var farm,farmCount,farmImg;

var companyCount,company,companyImg,companyPrice;
var playAgain,playAgainImg;
var factory,factoryCount,factoryImg;
var cps;
var clicker, clickerImg;

var bank,bankCount,bankImg;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  moneyImg = loadImage("money.png");
  playAgainImg = loadImage("playAgainButton2x.png");
  companyImg = loadImage("company.png");
  clickerImg = loadImage("cursor.png");
  factoryImg = loadImage("factory.png");
  farmImg = loadImage("farm.png");
  bankImg = loadImage("bank.png");
}

function setup() {
createCanvas(800,400);
moneyperClick = 1;
moneyCount = 0;
money = createSprite(400,200,20,20);
money.addImage(moneyImg);
moneySound = loadSound('ka-ching.mp3');

playAgain = createSprite(700,200,20,20);
playAgain.addImage(playAgainImg);
playAgain.visible = false;

companyCount = 0;
company = createSprite(40,360);
company.addImage(companyImg);
company.scale = 0.5;
companyPrice = 20;


factory = createSprite(40,300);
factory.addImage(factoryImg);
factory.scale = 0.1;
factoryCount = 0;

farm = createSprite(40,250);
farm.addImage(farmImg);
farm.scale = 0.2;
farmCount = 0;

bank = createSprite(40,200);
bank.addImage(bankImg);
bank.scale = 0.25;
bankCount = 0;
}

function draw() {
  background("black "); 
  textSize(60);
  textAlign(CENTER,TOP);
  textFont("Impact");
  fill("yellow");
  stroke("red");
  strokeWeight(5);


  if(gameState === PLAY){
    text("My Money $: " + moneyCount, 400,0);
    if(mousePressedOver(money)){
      moneyCount = moneyCount + moneyperClick;
      console.log(moneyCount);
      moneySound.play();
    }

    

    if(moneyCount >= 1000000){
      gameState  = END;
    }
    purchase(bank,100,bankCount,1.25);
    purchase(farm,5000,farmCount,3);
    purchase(factory,100000,factoryCount,10);
    purchase(company,25000,companyCount,5);
    
    //purchase(factory,10,factoryCount,1);
    }
    
    if(gameState === END){
      text("You Win!", 150,10);
      playAgain.visible = true;
      if(mousePressedOver(playAgain)){
        gameState = PLAY;
        reset();
      }
      }  
  drawSprites();
}

function reset() {
  moneyperClick = 1;
  moneyCount = 0;
  playAgain.visible = false;

}

function purchase(object,price,objectCount,moneyRate){
  object.visible = false;
  
  if(moneyCount >= price){
    object.visible = true;
  }else{
    object.visible = false;
  }
  if(mousePressedOver(object) && moneyCount >= price){
    moneyCount = moneyCount - price;
    objectCount = objectCount + 1;
    moneyperClick = round(moneyperClick + moneyRate);
    price = round(price * 1.2);
    let rand = random(1,10);
    //if(rand = 3){
//
  //  }
    
  }
}