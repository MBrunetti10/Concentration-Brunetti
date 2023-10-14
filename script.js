//Cards
const cards = document.querySelectorAll('.memory-card');
// now i need to make an object that'll equal of flipping the card.
let turnedCard=false
let firstcard, secondcard

function flipCard(card) {
    this.classlist.toggle('flip');
}
if(turnedCard) {
    turnedCard=true
    firstcard=this
}
else{
    turnedCard=false
    secondcard=this
}