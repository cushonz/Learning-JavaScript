class Deck{
    constructor(){

        // Empty array to populate with cards
        this.cards = [];

        const suits = ['Hearts','Spades','Diamonds','Clubs'];
        const numb = ['Ace',1,2,3,4,5,6,7,8,9,'King','Queen','Jack'];

        for (let suit in suits)
            for (let value in numb)
                this.cards.push(`${numb[value]} of ${suits[suit]}`);
    }


    /**
     *  Helper function to generate a random integer
     * @param max
     * @returns {number}
     */
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    /**
     *  Picks a card from the deck and removes from remaining cards in deck
     * @returns {selectedCard} Card picked from the deck
     */
    pickCard(){
        let toPick = this.getRandomInt(52);
        let selection = this.cards[toPick];
        // Removes card from deck
        this.cards.splice(toPick,1);
        
        return selection
    }

    /**
     * Extract the numerical value from the provided card
     * @param selection Raw number value.
     */
    extractCardNumber(selection){
        let result = selection.substring(0,2);
        if (isNaN(result[1]))
            return parseInt(result);
        else{
            return parseInt(result.substring(0,1))
        }
    }
}

module.exports = Deck;


