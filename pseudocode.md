html needs
-Title
-Grid layout - will be dynamically rendered
-Whose turn is it? -- will be dynamically rendered

Objects (see html)
-Title 

-Whose turn is it? Counter

-Grid Layout 

-Reset button
    -Only appears after game has been won.

Inputs
-Player 1, player 2
-First person to click is player one, they are Xs
-Second person to click is player two, they are Os

States array
State 0 -- no one has gone
State 1 -- player one has gone last 
State 2 --  player two has gone last

Functions

Initilize - run at start and end 
-Bring up title, whose turn, grid layout

-- Functions for x's and o's -- 
Play function
-Eventlistener for a space being clicked on
-When a space is clicked, either put an x or an o
-If there is already an x or an o, you cannot change the space
-Max number of possible clicks in a game: 9 moves

function onclick {
    when 
}

Dynamic display 
-Refreshes the board & "whose turn is it" counter after every click

Winning fuction
-Needs to recognize "three in a row" as a winning move. 
-Alert player with winning move wins
-Reset button appears which resets the entire game, does NOT refresh the page

let boardDefault = [
    {id: a, display: ""}
    {id: b, display: ""}
    {id: c, display: ""}
    {id: d, display: ""}
    {id: e, display: ""}
    {id: f, display: ""}
    {id: g, display: ""}
    {id: h, display: ""}
    {id: i, display: ""}
]

row 1: [a, b, c]
row 2: [d, e, f]
row 3: [g, h, i]

col 1: [a, d, g]]
col 2: [b, e, h]
col 3: [c, f, i]

diag 1: [a, e, i]
diag 2: [c, e, f]

example, does row 1 have string of identical letters? 



function matchingThree(arr) {
    // declare value 'position'
    if position !== 0 {
    for (let i = 0; i < array.length; i++){
        

    }
}
}

use index(of)


