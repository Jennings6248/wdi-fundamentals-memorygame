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
  let cardObject = cards[cardId]
  cardsInPlay.push(cardObject.rank)
  console.log(`User flipped ${cardObject.rank}`)
  console.log(`Your card image is ${cardObject.cardImage}`)
  console.log(`The card suit is ${cardObject.suit}`)
  checkForMatch()
}

flipCard(0)
flipCard(2)



















/*
const contacts = [ {
    firstName: "John", lastName: "Doe",
    phone: "(512) 355‐0453", email: "johndoe@email.com"
    }, {
    firstName: "Jane", lastName: "Doe",
    phone: "(312) 641‐2203", email: "janedoe@email.com"
    }, {
    firstName: "Suzie",
    lastName: "Smith",
    phone: "(415) 604‐4219",
    email: "suziesmith@email.com"
    } ];

 let listContacts = function() {
     for (let i =0; i < contacts.length; i++) {
         console.log(contacts[i].firstName + ' ' + contacts[i].lastName)
     }
 }

 listContacts()






 const pet = {
    name: "Daisy",
    species: "cat",
    favoriteToy: "laser pointer",
    age: 5,
    makeNoise: function () {
      console.log("Meow!");
    }
  };
  
  pet.makeNoise();



let poem = {
    author: 'Robert Frost',
    datePublished: 1916,
    name: 'The Road Not Taken',
    famousLine: 'Two roads diverged in a yellow wood',
    qoute: function() {
        console.log(this.author)

    }
}

poem.qoute()
*/


