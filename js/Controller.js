/*the clickNumber function stores how many clicks there have been in the whole game. I want to keep this, 
as it can be used for: Whose turn it is; How many turns have been taken; When to start looking for win conditions;
When the game is over (9 clicks). May reformat where this is/how it looks in future. */
//start clickCount at 0 
let clicker = 0
function clickNumber() {
    //once they are clicked, the click count is incremented by one. 
    clickCount++;
    console.log(clickCount);
    //commented the below out bc array needs to be empty to start
    // for (let i = 0; i < 9; i++) {
    //     storeTurns.push("")
    // }
    // console.log(storeTurns)
    storeTurns.splice([0], "", "A")
    console.log(storeTurns)
    //below is another duty of clickNumber -- telling whose turn it is based on the overall click count of the game.
    if (clickCount % 2 == 0) {
        xPlayer = true;
        yPlayer = false;
        //Do I need the line below here? Nothing happened when I commented it out 
        // symbol = document.createTextNode("")
    }
    else {
        yPlayer = true;
        xPlayer = false;
    }
    // console.log(yPlayer)
    console.log(xPlayer)
   //_________
 }
