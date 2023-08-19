const cardArray = [
    {
        name: 'fries',
        image: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    },
    {
        name: 'fries',
        image: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    }
];

cardArray.sort(() => 0.5 - Math.random()); /* Randomly sorts the array */
const gridDisplay = document.querySelector('#grid') /* looks through the document for the specified element */
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.append(card);
    }
};

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');

    console.log("Check for a match!");
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!');
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        
    }
    else {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
    };
    cardsChosen = [];
    cardsChosenIds = [];
};

function flipCard() {
    const cardId = this.getAttribute('data-id');
    
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].image);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 250); /* Calls a function after a certain amount of time has passed */
    };
};