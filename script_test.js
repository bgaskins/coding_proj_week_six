const expect = chai.expect;

describe('compareAndAwardPoints', function() {
    it('should correctly award points based on card rank', function() {
        const player1 = new Player([]);
        const player2 = new Player([]);
        
        //Test if player 1 wins
        player1.hand.push('King of Hearts');
        player2.hand.push('Ten of Spades');
        compareAndAwardPoints(player1, player2);
        expect(player1.points).to.equal(1);
        expect(player2.points).to.equal(0);

        //Reset the points for player 2 win
        player1.points = 0;
        player2.points = 0;

        //Test if player 2 wins
        player1.hand.push('Jack of Hearts');
        player2.hand.push('Queen of Spades');
        compareAndAwardPoints(player1, player2);
        expect(player1.points).to.equal(0);
        expect(player2.points).to.equal(1);

        //Reset the points for tie
        player1.points = 0;
        player2.points = 0;

         //Test if players tie
         player1.hand.push('Three of Hearts');
         player2.hand.push('Three of Clubs');
         compareAndAwardPoints(player1, player2);
         expect(player1.points).to.equal(0);
         expect(player2.points).to.equal(0);

        
    });
});