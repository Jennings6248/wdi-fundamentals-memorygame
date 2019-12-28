let cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png',
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
]  



let cardsInPlay = []



let checkForMatch = function() {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

let flipCard = function() {
 const cardId = this.getAttribute('data-id') 
  let cardObject = cards[cardId]
  cardsInPlay.push(cardObject.rank)
  console.log(`User flipped ${cardObject.rank}`)
  console.log(`Your card image is ${cardObject.cardImage}`)
  console.log(`The card suit is ${cardObject.suit}`)
  this.setAttribute('src', cardObject.cardImage)
  if (cardsInPlay.length === 2) {
    checkForMatch()
  }  

}





let createBoard = function(){
  for(let i = 0; i < cards.length; i++){
    let cardElement = document.createElement('img')
    cardElement.setAttribute('src','images/back.png')
    cardElement.setAttribute('data-id', i)
    cardElement.addEventListener('click', flipCard)
    let gameBoard = document.getElementById('game-board')
    gameBoard.appendChild(cardElement)


 
  }


}

createBoard()










