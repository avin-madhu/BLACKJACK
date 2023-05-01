let firstcard = getrandomcard()
let secondcard= getrandomcard()
let cardsarray=[firstcard,secondcard]
let won=false 
let message=""
let isalive=true
let sum= firstcard+secondcard
let startclicked=0
let cashWithdrawn=document.getElementById("CashWithDrawn")
let cashNow =0
let cashSum =0
let WonMessage = document.getElementById("marqueeTag")
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let clickSound = new Audio("click.mp3");
let winSound = new Audio("win.mp3");
let loseSound = new Audio("lose.mp3");
let startButton = document.getElementById("Startgame-Button")
let replayButton = document.getElementById("Replay-Button")
let newCardButton = document.getElementById("newcard-btn")


startButton.addEventListener('click',function(){
  clickSound.play();
})

newCardButton.addEventListener('click',function(){
  clickSound.play();
})

replayButton.addEventListener('click',function(){
  clickSound.play();
})

function getrandomcard(){
    return Math.floor(Math.random()*14)
}

function startgame(){
  
  if(won==false)
  {
    if(startclicked==0)
    {
     cashUpdate()
    }
     rendergame()
     startclicked=1
  }
}
function replay(){

  won = false;  
  messageEl.style.color='white'
    sum = 0
    startclicked=0
    messageEl.textContent="click START GAME to start"
    for(let i=0; i<cardsarray.length;i++)
    {
        cardsarray[i]=
      cardsEl.textContent=''
    }

   message.textContent="Click NEW CARD to draw a card"
   sumEl.textContent= "Sum: "
   cardsEl.textContent="Cards: "
   cashSum=0
   cashWithdrawn.textContent= "Cash withdrawn: "
   isalive=true

   
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


  
  function rendergame(){
   if(isalive==true)
   {
    cardsEl.textContent="Cards: "
    sumEl.textContent= "Sum: "+sum

    for(let i=0; i<cardsarray.length;i++)
    {
      cardsEl.textContent+=cardsarray[i]+" "
    }
   }

if (sum<=20){
    message="click NEW CARD to draw a card"
}else if (sum===21){
  messageEl.style.color="#11fa04"
    message="BLACKJACK 🎉 ";
    winSound.play()
    won = true
    cashSum=0
    cashNow=0
}else{
    messageEl.style.color="red"
    message="You Lost 😢 " 
    won = false
    loseSound.play()
    isalive=false
    cashNow=0;
    cashSum=0;
}
 messageEl.textContent=message

}


if(isalive==true)
{
  function newcard(){

  
   if(won==false)
   {
    if(startclicked==1)
    {
     let thirdcard= getrandomcard()
    sum+=thirdcard
    cardsarray.push(thirdcard)
    rendergame()
    if(isalive==true)
    {
     cashUpdate()
    }
    else
    {
     WonMessage.style.color="black"
    }
    }
   }
 }
}

function cashUpdate()
{
  cashNow=1000
  cashSum+=cashNow
  cashWithdrawn.textContent="Cash withdrawn: "+cashSum+" $";
  if(won==true)
  {
    cashSum+=100000
    cashWithdrawn.textContent="Cash withdrawn: "+cashSum;
   if(isalive==true)
   {
    WonMessage.style.color="white"
   }
  
  }
}






