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

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    pickCard(){
        let selection = this.cards[this.getRandomInt(52)];
        
        return selection
    }

    extractCardNumber(selection){
        let result = selection.substring(0,2);
        if (isNaN(result[1]))
            return parseInt(result);
        else{
            return parseInt(result.substring(0,1))
        }
    }
}

deck = new Deck();


