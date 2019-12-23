let cards = ['queen','queen', 'king', 'king']
let cardsInPlay = []

 /*if (cardsInPlay.length === 2) {
    console.log('There are two cards in play')
 }  else {
     console.log('Not enough cards in play')
 }

*/

let checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

let flipCard = function(cardId) {
  let cardName = cards[cardId]
  cardsInPlay.push(cardName)
  console.log(`User flipped ${cardName}`)
  checkForMatch()
}

flipCard(0)
flipCard(2)


  
