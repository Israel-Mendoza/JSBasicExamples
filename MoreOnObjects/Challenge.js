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
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}

myDeck.createDeck();
myDeck.shuffleDeck();
const hand1 = myDeck.drawMultipleCards(7);
const hand2 = myDeck.drawMultipleCards(7);
console.log(`Remaining cards in deck: ${myDeck.cards.length}\n`);

console.log(`Hand one: `);
for (let card of hand1) {
    console.log(`Current card: "${card.value} of ${card.suit}"`);
}
console.log();

console.log(`Hand two: `);
for (let card of hand2) {
    console.log(`Current card: "${card.value} of ${card.suit}"`);
}
console.log();
