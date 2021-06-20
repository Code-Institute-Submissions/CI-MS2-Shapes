"use strict";

document.addEventListener('DOMContentLoaded', createGame);

let shapesArray = [];


// Game Symbols arrays: animals, adventure, food, which will be assigned shapesArray for creating game board 
let animals = [
    {
        cardName: 'one',
        icon: '<i class="fas fa-cat"></i>'
    },
    {
        cardName: 'one',
        icon: '<i class="fas fa-cat"></i>'
    },
    {
        cardName: 'two',
        icon: '<i class="fas fa-frog"></i>'
    },
    {
        cardName: 'two',
        icon: '<i class="fas fa-frog"></i>'
    },
    {
        cardName: 'three',
        icon: '<i class="fas fa-kiwi-bird"></i>'
    },
    {
        cardName: 'three',
        icon: '<i class="fas fa-kiwi-bird"></i>'
    },
    {
        cardName: 'four',
        icon: '<i class="fas fa-crow"></i>'
    },
    {
        cardName: 'four',
        icon: '<i class="fas fa-crow"></i>'
    },
    {
        cardName: 'five',
        icon: '<i class="fas fa-hippo"></i>'
    },
    {
        cardName: 'five',
        icon: '<i class="fas fa-hippo"></i>'
    },
    {
        cardName: 'six',
        icon: '<i class="fas fa-otter"></i>'
    },
    {
        cardName: 'six',
        icon: '<i class="fas fa-otter"></i>'
    },
    {
        cardName: 'seven',
        icon: '<i class="fas fa-dog"></i>'
    },
    {
        cardName: 'seven',
        icon: '<i class="fas fa-dog"></i>'
    },
    {
        cardName: 'eight',
        icon: '<i class="fas fa-fish"></i>'
    },
    {
        cardName: 'eight',
        icon: '<i class="fas fa-fish"></i>'
    },
    ]
    
    let adventure = [
    {
        cardName: 'one',
        icon: '<i class="fas fa-binoculars"></i>'
    },
    {
        cardName: 'one',
        icon: '<i class="fas fa-binoculars"></i>'
    },
    {
        cardName: 'two',
        icon: '<i class="fas fa-campground"></i>'
    },
    {
        cardName: 'two',
        icon: '<i class="fas fa-campground"></i>'
    },
    {
        cardName: 'three',
        icon: '<i class="fas fa-caravan"></i>'
    },
    {
        cardName: 'three',
        icon: '<i class="fas fa-caravan"></i>'
    },
    {
        cardName: 'four',
        icon: '<i class="fas fa-compass"></i>'
    },
    {
        cardName: 'four',
        icon: '<i class="fas fa-compass"></i>'
    },
    {
        cardName: 'five',
        icon: '<i class="fas fa-fire-alt"></i>'
    },
    {
        cardName: 'five',
        icon: '<i class="fas fa-fire-alt"></i>'
    },
    {
        cardName: 'six',
        icon: '<i class="fas fa-hiking"></i>'
    },
    {
        cardName: 'six',
        icon: '<i class="fas fa-hiking"></i>'
    },
    {
        cardName: 'seven',
        icon: '<i class="fas fa-mountain"></i>'
    },
    {
        cardName: 'seven',
        icon: '<i class="fas fa-mountain"></i>'
    },
    {
        cardName: 'eight',
        icon: '<i class="fas fa-tree"></i>'
    },
    {
        cardName: 'eight',
        icon: '<i class="fas fa-tree"></i>'
    },
    ]
    
    let food = [
    {
        cardName: 'one',
        icon: '<i class="fas fa-apple-alt"></i>'
    },
    {
        cardName: 'one',
        icon: '<i class="fas fa-apple-alt"></i>'
    },
    {
        cardName: 'two',
        icon: '<i class="fas fa-carrot"></i>'
    },
    {
        cardName: 'two',
        icon: '<i class="fas fa-carrot"></i>'
    },
    {
        cardName: 'three',
        icon: '<i class="fas fa-cookie"></i>'
    },
    {
        cardName: 'three',
        icon: '<i class="fas fa-cookie"></i>'
    },
    {
        cardName: 'four',
        icon: '<i class="fas fa-drumstick-bite"></i>'
    },
    {
        cardName: 'four',
        icon: '<i class="fas fa-drumstick-bite"></i>'
    },
    {
        cardName: 'five',
        icon: '<i class="fas fa-egg"></i>'
    },
    {
        cardName: 'five',
        icon: '<i class="fas fa-egg"></i>'
    },
    {
        cardName: 'six',
        icon: '<i class="fas fa-hamburger"></i>'
    },
    {
        cardName: 'six',
        icon: '<i class="fas fa-hamburger"></i>'
    },
    {
        cardName: 'seven',
        icon: '<i class="fas fa-pizza-slice"></i>'
    },
    {
        cardName: 'seven',
        icon: '<i class="fas fa-pizza-slice"></i>'
    },
    {
        cardName: 'eight',
        icon: '<i class="fas fa-ice-cream"></i>'
    },
    {
        cardName: 'eight',
        icon: '<i class="fas fa-ice-cream"></i>'
    },
    ]

shapesArray = animals;
let topScore = 10000000000000;
let gameBoard = document.getElementById('game-area');
let eachTurnScore = parseInt(document.getElementById('each-turn-score').innerText);
let bestScore = parseInt(document.getElementById('best-score').innerText);
let restartBtn = document.getElementById('restart');
let gameSwitchBtn = document.getElementById('game-switcher');
let info = document.getElementById('info');
gameSwitchBtn.addEventListener('click', gameSwitch);
restartBtn.addEventListener('click', restartGame);
let selectedCards = [];
let cardsGuessed = [];

swal.fire({
	title: 'Welcome to Shapes' ,
	html: "<p>Your objective is to flip the cards and match the pairs. There is a total of 8 pairs.</p></br>Are you ready?",
    showCloseButton: true,
	confirmButtonColor: '#6289a2',
	confirmButtonText: 'Lets go!'
});

info.addEventListener("click", () => {
	swal.fire({
	html: '<p>Objective - Match 2 cards, find all 8 pairs</p><p><i class="fas fa-frog"></i>  <i class="fas fa-compass"></i>  <i class="fas fa-apple-alt"></i> - toggle card shapes.</p><p><i class="fas fa-redo"></i> - restart the game</p>',
	icon: 'info',
    showCloseButton: true,
	confirmButtonColor: '#6289a2',
	confirmButtonText: 'Lets do this!'
});;
});


function createGame() {
	shapesArray.sort(function() { return 0.5 - Math.random() });
	for ( let i = 0; i < shapesArray.length; i++ ) {
		let card = document.createElement('div');
		card.classList.add('card-frame');
		card.classList.add('back');
		card.setAttribute('id', i);
		card.innerHTML = shapesArray[i].icon;
		card.addEventListener('click', turnCard);
		gameBoard.appendChild(card);

	}
}

function checkCards() {
	let cards = document.getElementsByTagName('i');
	let cardOne = shapesArray[selectedCards[0]];
	let cardTwo = shapesArray[selectedCards[1]];
	let cardOneElement = document.getElementById(selectedCards[0]);
	let cardTwoElement = document.getElementById(selectedCards[1]);
	if (cardOne.cardName === cardTwo.cardName) {
		cardOneElement.removeEventListener('click', turnCard);
		cardTwoElement.removeEventListener('click', turnCard);
		cardsGuessed.push(selectedCards[0]);
		cardsGuessed.push(selectedCards[1]);
	} else { 
		cardOneElement.classList.add('back');
		cardTwoElement.classList.add('back');
	} 

	if (cardsGuessed.length === shapesArray.length) { 
		swal.fire({
            text: 'Congratulations! You got them all!',
            showCloseButton: true,
            confirmButtonColor: '#6289a2',
            confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Well done!',
          confirmButtonAriaLabel: 'Thumbs up, well done!',
        });

		restartGame();

	}

	selectedCards = [];
}

function turnCard() {

	this.classList.remove('back');
	var cardNumber = this.id;
	selectedCards.push(cardNumber);
	
	if (selectedCards[0] === selectedCards[1]) {
		selectedCards.pop();
	};

	if (selectedCards.length === 2) {
		setTimeout(checkCards, 300)
	};

	document.getElementById('each-turn-score').innerText = ++eachTurnScore;

	console.log(selectedCards);

}

function gameSwitch () {
	if (gameSwitchBtn.innerHTML === '<i class="fas fa-frog" aria-hidden="true"></i>') {
		gameSwitchBtn.innerHTML = '<i class="fas fa-compass"></i>';
		shapesArray = adventure;
		restartGame();
	} else if (gameSwitchBtn.innerHTML === '<i class="fas fa-compass" aria-hidden="true"></i>') {
		gameSwitchBtn.innerHTML = '<i class="fas fa-apple-alt"></i>';
		shapesArray = food;
		restartGame();
	} else {
		gameSwitchBtn.innerHTML= '<i class="fas fa-frog"></i>';
		shapesArray = animals;
		restartGame();
	}
}

function restartGame () {
	
	gameBoard.innerHTML = "";

	selectedCards = [];
	cardsGuessed = [];

	if (eachTurnScore < topScore && eachTurnScore >= 16 ) {
		document.getElementById('best-score').textContent = eachTurnScore;
		topScore = eachTurnScore;	 
	}
	
	eachTurnScore = "";
	document.getElementById('each-turn-score').innerText = 0;
	createGame();
}