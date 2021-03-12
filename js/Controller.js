/*the clickNumber function stores how many clicks there have been in the whole game. I want to keep this, 
as it can be used for: Whose turn it is; How many turns have been taken; When to start looking for win conditions;
When the game is over (9 clicks). May reformat where this is/how it looks in future. */
//start clickCount at 0 

// let storeTurns = [];
// let clicker = 0
// function clickNumber() {
//     //once they are clicked, the click count is incremented by one. 
//     clickCount++;
//     console.log(clickCount);
//     //commented the below out bc array needs to be empty to start
//     // for (let i = 0; i < 9; i++) {
//     //     storeTurns.push("")
//     // }
//     // console.log(storeTurns)
//     storeTurns.splice([0], "", "A")
//     console.log(storeTurns)
//     //below is another duty of clickNumber -- telling whose turn it is based on the overall click count of the game.
//     if (clickCount % 2 == 0) {
//         xPlayer = true;
//         yPlayer = false;
//         //Do I need the line below here? Nothing happened when I commented it out 
//         // symbol = document.createTextNode("")
//     }
//     else {
//         yPlayer = true;
//         xPlayer = false;
//     }
//     // console.log(yPlayer)
//     console.log(xPlayer)
//    //_________
//  }

//  function winCondition () {
//if the information under "" X or O in position 0, 1, and 2 of the array is X, person 1 wins. If O, person 2 wins. 
 //use 0, 1, 2, array positions insted of setting letters equal to the square positions?
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