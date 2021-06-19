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