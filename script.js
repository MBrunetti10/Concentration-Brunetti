//Cards
const cards = document.querySelectorAll('.memory-card');
// now i need to make an object that'll equal of flipping the card.
// put the guesses in the array.

let guesses = []

cards.forEach((card) => {
    card.addEventListener("click", (event) => {
        //checking to see if we are targeting the image.
        if (event.target.classList.contains("front-face")) {
            if (!event.target.parentElement.classList.contains("active")) {
                event.target.parentElement.classList.add("active")
                guesses.push(event.target.parentElement.dataset.card)
                if (guesses.length === 1) {
                    event.target.parentElement.classList.add("pending")
                }
            }

        } else {
            if (!event.target.contains("active")) {
                event.target.parentElement.classList.add("active")
                guesses.push(event.target.dataset.card)
                event.target.classList.add("pending")

            }
        }

        if (guesses.length === 2) {
            if (guesses[0] === guesses[1]) {
                document.querySelector.add('.pending').forEach((card) => {
                    card.classList.add("succesful")
                    card.classList.remove("pending")

                })
            } else {
                document.querySelector.add('.pending').forEach((card) => {
                    card.classList.add("wrong")
                    card.classList.remove("pending")
                    setTimeout(function () {
                        document.querySelector.add('.wrong').forEach((card) => {
                            card.classList.remove("active")
                            card.classList.remove("wrong")
                        })
                    }, 500);
                })
            }
        }
    })
})

