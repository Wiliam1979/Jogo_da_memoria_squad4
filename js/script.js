
  const cards = document.querySelectorAll('.memory-card');

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


  function trocaTema2(){
    document.getElementsByClassName("cartas")[0].src=deck.cartas[0]
    document.getElementsByClassName("cartas")[1].src=deck.cartas[1]
    document.getElementsByClassName("cartas")[2].src=deck.cartas[2]
    document.getElementsByClassName("cartas")[3].src=deck.cartas[3]
    document.getElementsByClassName("cartas")[4].src=deck.cartas[4]
    document.getElementsByClassName("cartas")[5].src=deck.cartas[5]
    document.getElementsByClassName("cartas")[6].src=deck.cartas[6]
    document.getElementsByClassName("cartas")[7].src=deck.cartas[7]
    document.getElementsByClassName("cartas")[8].src=deck.cartas[8]
    document.getElementsByClassName("cartas")[9].src=deck.cartas[9]
    document.getElementsByClassName("cartas")[10].src=deck.cartas[10]
    document.getElementsByClassName("cartas")[11].src=deck.cartas[11]

    document.getElementsByClassName("cartas2")[0].src=deck.cartas2[0]
    document.getElementsByClassName("cartas2")[1].src=deck.cartas2[0]
    document.getElementsByClassName("cartas2")[2].src=deck.cartas2[0]
    document.getElementsByClassName("cartas2")[3].src=deck.cartas2[0]
    document.getElementsByClassName("cartas2")[4].src=deck.cartas2[0]
    document.getElementsByClassName("cartas2")[5].src=deck.cartas2[0]
    document.getElementsByClassName("cartas2")[6].src=deck.cartas2[0]
    document.getElementsByClassName("cartas2")[7].src=deck.cartas2[0]
    document.getElementsByClassName("cartas2")[8].src=deck.cartas2[0]
    document.getElementsByClassName("cartas2")[9].src=deck.cartas2[0]
    document.getElementsByClassName("cartas2")[10].src=deck.cartas2[0]
    document.getElementsByClassName("cartas2")[11].src=deck.cartas2[0]

  }

  function trocaTema3(){
    document.getElementsByClassName("cartas")[0].src=deck2.cartas[0]
    document.getElementsByClassName("cartas")[1].src=deck2.cartas[1]
    document.getElementsByClassName("cartas")[2].src=deck2.cartas[2]
    document.getElementsByClassName("cartas")[3].src=deck2.cartas[3]
    document.getElementsByClassName("cartas")[4].src=deck2.cartas[4]
    document.getElementsByClassName("cartas")[5].src=deck2.cartas[5]
    document.getElementsByClassName("cartas")[6].src=deck2.cartas[6]
    document.getElementsByClassName("cartas")[7].src=deck2.cartas[7]
    document.getElementsByClassName("cartas")[8].src=deck2.cartas[8]
    document.getElementsByClassName("cartas")[9].src=deck2.cartas[9]
    document.getElementsByClassName("cartas")[10].src=deck2.cartas[10]
    document.getElementsByClassName("cartas")[11].src=deck2.cartas[11]

    document.getElementsByClassName("cartas2")[0].src=deck2.cartas2[0]
    document.getElementsByClassName("cartas2")[1].src=deck2.cartas2[0]
    document.getElementsByClassName("cartas2")[2].src=deck2.cartas2[0]
    document.getElementsByClassName("cartas2")[3].src=deck2.cartas2[0]
    document.getElementsByClassName("cartas2")[4].src=deck2.cartas2[0]
    document.getElementsByClassName("cartas2")[5].src=deck2.cartas2[0]
    document.getElementsByClassName("cartas2")[6].src=deck2.cartas2[0]
    document.getElementsByClassName("cartas2")[7].src=deck2.cartas2[0]
    document.getElementsByClassName("cartas2")[8].src=deck2.cartas2[0]
    document.getElementsByClassName("cartas2")[9].src=deck2.cartas2[0]
    document.getElementsByClassName("cartas2")[10].src=deck2.cartas2[0]
    document.getElementsByClassName("cartas2")[11].src=deck2.cartas2[0]
  }

const deck = {
  "cartas2" : ["./img/dc/dcComics.jpg"] ,
  
  "cartas": [
  
  "./img/dc/Alerquina.jpg" ,
  "./img/dc/Alerquina.jpg" ,

  "./img/dc/Batman.jpg" ,
  "./img/dc/Batman.jpg" ,

  "./img/dc/SuperHomem.jpg" ,
  "./img/dc/SuperHomem.jpg" ,

  "./img/dc/SuperGirl.jpg" ,
  "./img/dc/SuperGirl.jpg" ,

  "./img/dc/Flash.jpg" ,
  "./img/dc/Flash.jpg" ,

  "./img/dc/MulherMaravilha.jpg" ,
  "./img/dc/MulherMaravilha.jpg" 
] ,
}

const deck2 = {
"cartas2" : ["./img/marvel/logoMarvel.jpg"] ,

"cartas": [
"./img/marvel/CapitaoAmerica.jpg",
"./img/marvel/CapitaoAmerica.jpg",

"./img/marvel/HomemDeFerro.jpg",
"./img/marvel/HomemDeFerro.jpg",

"./img/marvel/Hulk.jpg" ,
"./img/marvel/Hulk.jpg" ,

"./img/marvel/Thor.jpg" ,
"./img/marvel/Thor.jpg" , 

"./img/marvel/HomemAranha.jpg" , 
"./img/marvel/HomemAranha.jpg" , 

"./img/marvel/DeadPool.jpg" , 
"./img/marvel/DeadPool.jpg" 
 ]
}



