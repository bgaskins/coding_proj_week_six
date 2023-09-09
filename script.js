class Deck {
    constructor() { //Array of card suits and ranks 
        this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']; 
        this.deck = this.createDeck();
    }
    //Create a new deck with rank and suit
    createDeck() {
        const deck = [];        
        for (const suit of this.suits) {
            for (const rank of this.ranks) {
                deck.push(`${rank} of ${suit}`)
            }
        } 
        return deck;
    }
    /*Shuffle the deck. Starts with last card in deck and iterates backwards. */
    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); //Generate random integer from deck arrays
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; //Swaps cards
        }
    }
}

class Player {
    constructor() {
        this.hand = [];
        this.points = 0; 
    }

    dealCard(card) {
        this.hand.push(card);
    }
    //Iterate through the turns where each Player plays a Card.
    // Draw a card from the player's hand
    drawCard() {
        if (this.hand.length > 0) {
            return this.hand.pop();
        } else {
            console.log("You are out of cards.");
            return null;
        }
    }
}

    /*The Player who played the higher card is awarded a point. Pop method is player playing 
    top card until running out*/
    function compareAndAwardPoints(player1, player2) {
        const card1 = player1.hand.pop(); //Player 1 hand 
        const card2 = player2.hand.pop(); //Player 2 hand 

        //If a player is out of cards, zero points will be returned
        if (!card1 || !card2) {
            return;
        }

        //Compare cards based on rank
        const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        const rank1 = card1.split(' ')[0];
        const rank2 = card2.split(' ')[0];

        //Find index of rank
        const rank1Index = rankOrder.indexOf(rank1);
        const rank2Index = rankOrder.indexOf(rank2);

        //If the index total is higher than the other player's, the point will be rewarded to that player
        if (rank1Index > rank2Index) {
            player1.points++;
        } else if (rank1Index < rank2Index) {
            player2.points++;
        } 
    }

        //Create a new deck by accessing the array cards for a game
        function playGame () {
            const deck = new Deck();
            deck.shuffle(); // Shuffle player 1 deck


        //Players 1 and 2 draw from new instances of the current deck
            const player1 = new Player();
            const player2 = new Player();

        // Deal 26 cards to players. Cards are added to hand with dealCard method
        for (let i = 0; i < 26; i++) {
            player1.dealCard(deck.deck.pop());
            player2.dealCard(deck.deck.pop());
        }

        while (player1.hand.length > 0 && player2.hand.length > 0) {
            compareAndAwardPoints(player1, player2);

        }


        //After all cards have been played, display the score and declare the winner
        console.log(`Player 1 points: ${player1.points}`);
        console.log(`Player 2 points: ${player2.points}`);

            if (player1.points > player2.points) {
                console.log('Player 1 wins!');
            } else if (player1.points < player2.points) {
                console.log('Player 2 wins!');
            } else {
                console.log('It\'s a tie!'); //Ties result in zero points for both Players

            }

    }   //Start game
        playGame();



