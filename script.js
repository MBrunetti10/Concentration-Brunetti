//Cards
const cards = document.querySelectorAll('.memory-card');
const winningHeading = document.getElementById('Winning-heading');
const losingHeading = document.getElementById('Losing-heading');
// now i need to make an object that'll equal of flipping the card.
// put the guesses in the array.

//store a guess
let guesses = []
let moves = 0;
let correctMatches = 0;
let win = false;


cards.forEach((card) => {
    card.addEventListener("click", (event) => {
        //checking to see if we are targeting the image.
     if (moves <= 29){

     
        if (event.target.classList.contains("front-face")|| event.target.classList.contains("back-face"))  {
            if (!event.target.parentElement.classList.contains("active")) {
                event.target.parentElement.classList.add("active")
                guesses.push(event.target.parentElement.dataset.card)
                
                    event.target.parentElement.classList.add("pending")
                
            }

        } else {
            if (!event.target.contains("active")) {
                event.target.parentElement.classList.add("active")
                guesses.push(event.target.dataset.card)
                event.target.classList.add("pending")

            }
        }}

        if (guesses.length === 2) {
            if (guesses[0] === guesses[1]) {
                document.querySelectorAll('.pending').forEach((card) => {
                    card.classList.add("succesful")
                    card.classList.remove("pending")

                }) 
                correctMatches +=1;
            } else {
                document.querySelectorAll('.pending').forEach((card) => {
                    card.classList.add("wrong")
                    card.classList.remove("pending")
                    setTimeout(function () {
                        document.querySelectorAll('.wrong').forEach((card) => {
                            card.classList.remove("active")
                            card.classList.remove("wrong")
                        })
                    }, 500);
                })
            }
            guesses.pop();
            guesses.pop();
            moves +=1;
            //winning and losing logic
            if(correctMatches === 8){
                win = true
            winningHeading.style.display = "block"    
            }
            if(moves === 30 && win===false ){
            losingHeading.style.display = "block"
            }
        }



        
    })
})

