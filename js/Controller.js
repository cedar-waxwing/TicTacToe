
//start clickCount at 0 
//once they are clicked, the click count is incremented by one. Figure out state to 
//Need to have something in here that does not allow a double click. Boolean?

//method -- say that for all the tiles, they need to be bound to this clickhandler
function clickNumber() {
    clickCount++;
    console.log(clickCount);
    storeTurns.splice([0], "", "A")
    console.log(storeTurns)
}

// if clickNumber 
// //Whose turn is it?
//COUNT CLICKS 
//click 1 = X player
//click 2 = Y player 
//odd # clicks = x player
//even # clicks = y player 



/* 
initialize
helper function for dynamic rendering 
// generateElement function 
render method


tile click event listener
    //moves >5 ? condition
    //win condition, tie condition  
    -> condition to see if we can start checking at 5 moves
    set tile clickability -- do it in the tile click event (same function as # below)
    switch current player

-win condition
    -did we have a winner?
    -set tile clickability for all tiles #
    -display final game state
    -restart click event listener

*/