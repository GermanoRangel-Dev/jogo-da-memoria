const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipcard(){
     if(lockBoard) return;
     if(this === firstCard) return;

     this.classList.add('flip');
     
     if(!hasFlippedCard) {      // selecionar as cartas
          hasFlippedCard = true;
          firstCard = this;
          return;
     }
     secondCard = this;
     hasFlippedCard = false;
     checkForMatch();
}

function checkForMatch() {   // análise das cartas para saber se são iguais
     if(firstCard.dataset.card === secondCard.dataset.card) {
      disableCards();
     
      return;    
     }
     unflipCards();
}

function disableCards(){  // se iguais desabilita as cartas
     firstCard.removeEventListener('click', flipcard);
     secondCard.removeEventListener('click', flipcard);
   
     resetBoard();
}

function unflipCards(){  //se diferentes as cartas retornam ao estado inicial
     lockBoard = true;

     setTimeout(()=>{
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');

        resetBoard();
     }, 1500);
}

function resetBoard(){  //
     [hasFlippedCard, lockBoard] = [false, false];
     [firstCard, secondCard] = [null, null];
}

(function shuffle(){
     cards.forEach((card) => {
          let ramdomPosition = Math.floor(Math.random() * 32);
          card.style.order = ramdomPosition;
     })
})();

cards.forEach((card) => {
     card.addEventListener('click', flipcard)
     
})

function startMusic(){
     const audio = document.querySelector('#music');

     startMusic.addEventListener('#music', function(){
          audio.play();
     })
}