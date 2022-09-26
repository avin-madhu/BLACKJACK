let firstcard = getrandomcard()
let secondcard= getrandomcard()
let cardsarray=[firstcard,secondcard]
let won=false 
let message=""
let isalive=true
let sum= firstcard+secondcard
let startclicked=0

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function getrandomcard(){
    return Math.floor(Math.random()*13)
}

function startgame(){
    rendergame()
    startclicked=1
}
function replay(){

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
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


function rendergame(){
    cardsEl.textContent="Cards: "
    sumEl.textContent= "Sum: "+sum

    for(let i=0; i<cardsarray.length;i++)
    {
      cardsEl.textContent+=cardsarray[i]+" "
    }

if (sum<=20){
    message="click NEW CARD to draw a card"
}else if (sum===21){
    message="BLACKJACK!!"
    won = true
}else{
    message="You Lost :("
    isalive=false
}
 messageEl.textContent=message

}

function newcard(){
   if(startclicked==1)
   {
    let thirdcard= getrandomcard()
   sum+=thirdcard
   cardsarray.push(thirdcard)
   rendergame()
   }
}


