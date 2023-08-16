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

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        gridDisplay.append(card);
    }
};

createBoard();