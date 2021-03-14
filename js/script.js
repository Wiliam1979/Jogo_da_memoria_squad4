
  const cards = document.querySelectorAll('.memory-card');

  var deckmarvel
  fetch("../json/deckmarvel.json")
  .then(response => response.json())
  .then(data => { deckmarvel = data
  })
  .catch(error => console.error(error))

  var deckdc
  fetch("../json/deckdc.json")
  .then(response => response.json())
  .then(data => { deckdc = data
  })
  .catch(error => console.error(error))

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
   if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

   resetBoard();
  }

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

     resetBoard();
    }, 1500);
  }

 function resetBoard() {
   [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
 }

  (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));

  function trocaTemaMarvel(){
    document.getElementsByClassName("cartas")[0].src=deckdc.cartas[0]
    document.getElementsByClassName("cartas")[1].src=deckdc.cartas[1]
    document.getElementsByClassName("cartas")[2].src=deckdc.cartas[2]
    document.getElementsByClassName("cartas")[3].src=deckdc.cartas[3]
    document.getElementsByClassName("cartas")[4].src=deckdc.cartas[4]
    document.getElementsByClassName("cartas")[5].src=deckdc.cartas[5]
    document.getElementsByClassName("cartas")[6].src=deckdc.cartas[6]
    document.getElementsByClassName("cartas")[7].src=deckdc.cartas[7]
    document.getElementsByClassName("cartas")[8].src=deckdc.cartas[8]
    document.getElementsByClassName("cartas")[9].src=deckdc.cartas[9]
    document.getElementsByClassName("cartas")[10].src=deckdc.cartas[10]
    document.getElementsByClassName("cartas")[11].src=deckdc.cartas[11]

    document.getElementsByClassName("cartas2")[0].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[1].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[2].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[3].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[4].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[5].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[6].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[7].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[8].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[9].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[10].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[11].src=deckdc.cartas2[0]
  }

  function trocaTemaDc(){
    document.getElementsByClassName("cartas")[0].src=deckmarvel.cartas[0]
    document.getElementsByClassName("cartas")[1].src=deckmarvel.cartas[1]
    document.getElementsByClassName("cartas")[2].src=deckmarvel.cartas[2]
    document.getElementsByClassName("cartas")[3].src=deckmarvel.cartas[3]
    document.getElementsByClassName("cartas")[4].src=deckmarvel.cartas[4]
    document.getElementsByClassName("cartas")[5].src=deckmarvel.cartas[5]
    document.getElementsByClassName("cartas")[6].src=deckmarvel.cartas[6]
    document.getElementsByClassName("cartas")[7].src=deckmarvel.cartas[7]
    document.getElementsByClassName("cartas")[8].src=deckmarvel.cartas[8]
    document.getElementsByClassName("cartas")[9].src=deckmarvel.cartas[9]
    document.getElementsByClassName("cartas")[10].src=deckmarvel.cartas[10]
    document.getElementsByClassName("cartas")[11].src=deckmarvel.cartas[11]

    document.getElementsByClassName("cartas2")[0].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[1].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[2].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[3].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[4].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[5].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[6].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[7].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[8].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[9].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[10].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[11].src=deckmarvel.cartas2[0]
  }

  

