# Vilmantas Zaleckas
## Code Institute Second Milestone Project 
## **Shapes**- Memory Game

A simple memory game of shapes, a fun project created for Code Institutes Interactive Frontend Development Milestone Project.


## Index

- [Strategy](#strategy)
- [Scope](#scope)
- [User Stories](#user-stories)
- [Structure](#structure)
  - [Mobile](#mobile)
  - [Tablet](#tablet)
  - [Desktop](#desktop)
- [Features](#features)
- [Design](#design)
- [Wireframes](#wireframes)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Credits](#credits)
- [Testing](#testing)

## Strategy 

* Simple, one-page memory game website for training users memory.
* Website for the user to spend their spare free time and have fun matching shapes.
* Game of Shapes, uncovering and matching two pairs of Shapes, by removing cards from the table(screen).
* Free game to visit, without any advertising or unnecessary information. It's just a game.


## Scope

Simple, distraction-free layout for a visual game of shapes, with few light pastel colours, to keep game experience light, distraction-free and not heavy on the eyes. 
This is the game of shapes, it will mainly consist of symbols("Shapes")- user will play with shapes and symbols will be guiding the user through the game and page navigation, very little written words, with an exception for logo and game instructions, as well as pop up message at the end of the game to congratulate user for matching all shapes. 
* Game will consist of one page and will include:
 1. Header with game logo and navigation buttons.
 2. Score area to reflect the progress of the game, as well as best score, to have an objective for the user to improve on.
 3. Game area (Game Board) where 16 cards (8 pairs of shapes) will be randomly placed on the game area.
 4. Footer with social/contact links and creators name.

## User Stories

* I am a person looking to test and train my memory in a simple and fun way by playing an online game.
* I am a child looking to spend some time online and play a game ( I may be unaware that in the process of playing this game and having fun, the game may train my attention and memory ).
* I am a teacher looking to find material for my students to train their memory skills and have fun in the process.
* I am an elderly person looking to exercise my memory.
* I am an educator looking to find out what nowadays technologies could offer for the eduction.
* I am a person looking to have fun by playing a game during my free time.

### User Goals

#### First Time Visitor

* I'd like to play a simple game.
* I'd like to be able to read instructions on how to play the game.
* I'd like to be able to track my progress with a scoring system.
* I'd like to challenge myself by tracking and trying to beat the best score and increase the interest in games replayability.
* I'd like to play the game which has a pleasant to the eye appearance.
* I'd like to know who created the game and be able to contact that person or see his social links for other projects.

#### Retrurning Visitor

* I'd like to play the game again.
* I'd like to continue training my memory skills.
* I'd like to improve my game skills and beat the best score.
* I'd like to contact the game creator.
* I'd like to check other projects of the creator.

## Structure

### Mobile

* Simplistic appearance.
* 3 interactive buttons centred in the header: "Change game shapes", "Restart the game", "Information (Game rules)".
* Score area with current turns taken and best score centred under the header.
* Game area taking the full width of the screen, with 4 game cards in a row, 4 rows in total.
* Cards will be smaller compoared to desktop or tablet screens.
* Footer with Social links centred.

### Tablet

* Simplistic appearance.
* Header taking the full width of the screen, "Shapes" Logo on the left side of the header and 3 interactive buttons on the right side: "Change game shapes", "Restart the game", "Information (Game rules)".
* Score area taking the full width of the screen with current turns taken and best score centred under the header.
* Game area taking the full width of the screen, with 4 game cards in a row, 4 rows in total. 
* Footer taking the full width of the window with social links on the left side, creators name on the right side.

### Desktop

* Simplistic appearance.
* Header taking 60% of windows width. "Shapes" Logo on the left side of the header and 3 interactive buttons on the right side: "Change game shapes", "Restart the game", "Information (Game rules)".
* Score area taking 60% of windows width with current turns taken and best score centred under the header.
* Game area taking 60% of the window, with 4 game cards in a row, 4 rows in total. 
* Footer taking 60% of the window with social links on the left side, creators name on the right side.

## Features

### Implemented

The main porpouse of the webpage is the game, for this reason it will have only Logo and game control buttons in he header.
Logo will be just a name "Shapes", it has to be as simple as possible and just a short name describes the porpouse and idea of the game, as you will be playing with shapes. This will be located at the left side of the header. Game control buttons: 
* "Change Shapes" - button which will toggle between 3 types of shapes, giving game bit of variety for replayability.
* "Restart Game" - button to restart the game, if user made a mistake or exceeded turns for achieving best score, restarting the game will keep the best score, oposed to reloading the page, which will clear game stats. 
* "Information"- game rules and minimal descriptions of game buttons". 
Buttons will be on the right hand side of the header. Well page loaded user will be greeted with welcome message and message to explain the game objective, the button at the button saying "Let's go!", setting the mood for having fun and taking the challenge. 

Under the header there will be score bar (area), located at the top of the game area, for it to be easy and intuitive to track or look up at your present scroe and if user is up for a challenge- best score next to it( named "Best", to keep it simple without distracting with long words) to track the progress.

Game area will be clean, without borders or anything distractive around, so user can concentrate all his attention for the game.
Game cards will be positioned with 4 cards per row and 4 cards per column. 
Game will be played by removing two cards from the game area, which will uncover different shapes on the game board, once two cards are matched they stay uncovered until all 8 pairs of cards are found and game will notify user with pop up message, that game is over. Ultimate game goal is to uncover all game cards by taking least turns.  

Footer will inherit the simplicity of the header and game area, will have 3 social links with email, linkedIn profile page and github page for user to have availability to follow up with comments, compliments or new project ideas.

### Enchansments For Fututre

* Possibility of changing color themes, as well as black and white theme, which would work very well with these shapes.
* If there would be any requests or interest, there would be possibility to add timer for extra layer of challenge, but at the moment it was not implemented, as the game idea was to train memory and same time relax, rather than rushing through it.
* Add few more games with shapes, to have a place for user to come back even more often.
* Have a user base, for users to be able to track their progress and not lose it after leaving the page.

## Design

Design idea for the game is to have lightnes and simplicity on the eyes and mind of the user. Rounded shapes, pastel colours and minimal written words will be used to achieve this impression. 

* Logo - to be simple and tell the user the stroy and the purpouse of this page at a glance, for this reason only word "Shapes" will be used, as user will be playing with shapes, aswell as game controls (navigation) will also consist only of shapes. Will have a rounded border and same background as the game control buttons, to have a nice simetric balance between both sides of the header. Due to absolute minimal (aiming to eliminate most written words) page design, logo will use same fonts as the rest of the page to keep connection and fluidity between written elements of the game.

* Buttons (game controls / navigation) - will share same styling as logo, to have simetric header balance with Logo.