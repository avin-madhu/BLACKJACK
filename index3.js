let firstcard = getrandomcard()
let secondcard= getrandomcard()
let cardsarray=[firstcard,secondcard]
let won=false 
let message=""
let isalive=true
let sum= firstcard+secondcard

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function getrandomcard(){
    return Math.floor(Math.random()*13)
}

function startgame(){
    rendergame()
}


function rendergame(){
    cardsEl.textContent="Cards: "
    sumEl.textContent= "Sum: "+sum

    for(let i=0; i<cardsarray.length;i++)
    {
      cardsEl.textContent+=cardsarray[i]+" "
    }

if (sum<=20){
    message="Do you want to draw a card?"
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
   let thirdcard= getrandomcard()
   sum+=thirdcard
   cardsarray.push(thirdcard)
   rendergame()
}


