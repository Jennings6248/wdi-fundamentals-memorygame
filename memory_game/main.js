let cards = ['queen','queen', 'king', 'king']
let cardsInPlay = []
let cardOne = cards[0]
let cardTwo = cards[2]

cardsInPlay.push(cards[0])
cardsInPlay.push(cards[2])

console.log(`user flipped ${cards[0]}`)
console.log(`user flipped ${cards[2]}`)

if (cardsInPlay.length === 2) {
   console.log('There are two cards in play')
}  else {
    console.log('Not enough cards in play')
}

if (cardsInPlay[0] === cardsInPlay[2]) {
    alert('You found a match!')
 }  else {
     alert('Sorry, try again')
 }