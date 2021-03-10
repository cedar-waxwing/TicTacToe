let clickCount = 0;
let storeTurns = [];
let symbol = "";

//Need to have something here that stops the click count at 9. 
// if(clickCount >=9) {
//     return

// for (let i = 0; i < 9; i++) {
    //below, there are 9 "col" class items sitting in an array. The for loop above loops through them, adding an event listener to each. 
    //break up line below to make it more readable 
    // document.getElementsByClassName("col")[i].addEventListener("click", clickNumber)

/* need a function to see how many times that specific tile has been clicked 
store turns in an array
 
initialize  array [] -- no click defualt is "" for each place 
event listener -- when a tile is clicked, push "1" into 
 
*/

// function switchTurnsArray() {
//  storeTurns.push(i, X or O)
// }
// document.getElementsByClassName("col")[i].addEventListener("click", switchTurnsArray() {




// document.getElementsByClassName("col").addEventListener("click", numberofClicks())


    // count (0, 1, 2,... -> n) -- dual purpose -- keeps track of game moves
    // or could do a boolean true/false x === true, but o is false 
/*

State management

Who won
every time you click, you can save the number, or  you can auto increment ++
    number (based on the sum of all the rows, cols, diags)
    techincally a controller method that would set the state of this number

    store turns in array
    idea (I like this) - "" for no click, "X" for x, "O" for o.
    Tile {
        clicked?
        "" || "x" || "o"
        "who clicked" - can be abstracted
    }
    [Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile,]

    Board: (class) {
        is game complete?
        all tiles: array
        how many tiles do I have? -- can be abstrcted from length of array
        current state of all my tiles -- can be abstracted
    }

Parent / Child relationships
parent has many children
children have ONE parent and can have many siblings

Tiles could have states -- boolean - true/false to dictate tile clickability. On
Finish of game we could set them all to false



Winning function
-Needs to recognize "three in a row" as a winning move.
-Alert player with winning move wins*/

// let boardDefault = [
//     {id: a, display: ""}
//     {id: b, display: ""}
//     {id: c, display: ""}
//     {id: d, display: ""}
//     {id: e, display: ""}
//     {id: f, display: ""}
//     {id: g, display: ""}
//     {id: h, display: ""}
//     {id: i, display: ""}
// ]
//use 0, 1, 2, array positions insted of setting letters equal to the square positions. 
// //Position based on the index is where x is or where o is 
// board positions: 
// [0, 1, 2, 3, 4, 5, 6, 7, 8]

// 3 in a row: 
// rows
// row 1: [0, 1, 2]
// row 2: [3, 4, 5]
// row 3: [6, 7, 8]

// cols
// col 1: [0, 3, 6]
// col 2: [1, 4, 7]
// col 3: [2, 5, 8]

// diags
// diag 1: [0, 4, 8]
// diag 2: [2, 4, 6]

// example, does row 1 have string of identical letters? 


// function matchingThree(arr) {
//     // declare value 'position'
//     if position !== 0 {
//     for (let i = 0; i < array.length; i++){


//     }
// }
// }

// use index(of)
