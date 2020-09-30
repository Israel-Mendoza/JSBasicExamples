// A deck factory:

function createDeck() {
    const myDeck = {
        suits: ["hearts", "diamonds", "spades", "clubs"],
        values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
        cards: [],
        drawnCards: [],
        createDeck() {
            const { suits, values, cards } = this;
            for (let suit of suits) {
                for (let value of values.split(",")) {
                    cards.push({ suit, value });
                }
            }
        },
        drawCard() {
            const currentCard = this.cards.pop();
            this.drawnCards.push(currentCard);
            return currentCard;
        },
        drawMultipleCards(number) {
            const drawnCards = [];
            for (let i = 0; i < number; i++) {
                drawnCards.push(this.drawCard());
            }
            return drawnCards;
        },
        shuffleDeck() {
            console.log("Shuffling deck!")
            for (let i = this.cards.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
            }
        }
    }
    myDeck.createDeck();
    return myDeck;
}

const myDeck = createDeck();
