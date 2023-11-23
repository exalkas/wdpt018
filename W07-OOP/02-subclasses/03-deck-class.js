/**
 * 07.
 * Create a class called Deck that represents a standard deck of playing cards. It should have properties for cards, which is an array of Card objects, and size, which is the number of cards in the deck. Add methods called shuffle() and draw() that allow the user to shuffle the deck and draw a card from the top of the deck, respectively. Then, create an instance of the Deck class and use the shuffle() and draw() methods to simulate a game of cards.
 *
 */

class Deck {
  constructor() {
    this.cards = [];

    this.size = 0;

    const colors = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const values = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];

    // for (let i = 0; i < colors.length; i++) {
    //     for (let j = 0; j < values.length; j++) {

    //         const card = {
    //             color: colors[i], // Hearts
    //             value: values[j], // Ace
    //           };

    //           this.cards.push(card);
    //     }

    // }

    colors.forEach((color) => {
      values.forEach((value) => {
        const card = {
          color: color, // Hearts
          value: value, // Ace
        };

        this.cards.push(card);
      });
    });
    console.log("🚀 ~ Deck ~  this.cards :", this.cards);
    console.log("🚀 ~ Deck ~  this.cards :", this.cards.length);
  }

  shuffle() {
    const randomIndex = Math.floor(Math.random() * 51);
    console.log("🚀 ~ Deck ~ randomIndex:", randomIndex);

    // 1. generate a random index
    // 2. delete the item with that index
    // 3. add this item to a new array
    // 4. generate the next random index 0 - 50
  }

  draw() {
    this.cards.pop();
    console.log("🚀 ~ Deck ~  this.cards :", this.cards);
  }

  drawRandom() {
    const randomIndex = Math.floor(Math.random() * this.cards.length - 1);
    console.log("🚀 ~ Deck ~ randomIndex:", this.cards[randomIndex]);
  }
}

const lasVegasDeck = new Deck();

lasVegasDeck.shuffle();
lasVegasDeck.draw();
lasVegasDeck.draw();
lasVegasDeck.draw();
lasVegasDeck.drawRandom();
lasVegasDeck.drawRandom();
lasVegasDeck.drawRandom();
lasVegasDeck.drawRandom();
