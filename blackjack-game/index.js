let cards = [];
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    return Math.floor(Math.random() * 11) + 1; // 生成 1 到 11 的随机数
}

function startGame() {
    cards = [getRandomCard(), getRandomCard()]; // 随机生成初始两张卡
    renderGame();
}

function calculateSum() {
    return cards.reduce((total, card) => total + card, 0);
}

function renderGame() {
    let sum = calculateSum();
    cardsEl.textContent = `Cards: ${cards.join(' ')}`;
    sumEl.textContent = `Sum: ${sum}`;

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = getRandomCard();
    cards.push(card);
    console.log(cards);
    renderGame();
}
