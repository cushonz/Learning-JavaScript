//import statement
const Deck = require("./deck.js");

/**
 * Deal a hand to a player
 * @param handSize How many cards per hand
 * @returns {any[]} Hand of cards dealt to player
 */
function dealHand(handSize,deck){
    let hand = [];
    for (let i = 0; i < handSize; i++){
        hand.push(deck.pickCard());
    }
    return hand;
}

// Creates a deck to play from
let cardDeck = new Deck();



