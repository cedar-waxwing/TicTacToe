
//function that creates the board 
/*3 columns and 3 rows are created below*/
//to stop clicks after one click:
//if (xPlayer == true || yPlayer == true)

class TicTacToeBoard {
    constructor() {
    }
    whichSymbol() {
        if (clickCount % 2 == 0) {
            return "O"
        } return "X"
    }

    boardChips(tile) {
        console.log(tile);
        symbol = document.createTextNode(this.whichSymbol());
        tile.appendChild(symbol);
    }

    createBoard() {
        let App = document.getElementById("App")
        // let App = document.getElementByID("App")
        for (let i = 0; i < 3; i++) {
            let row = document.createElement("div")
            row.className = "row"
            for (let j = 0; j < 3; j++) {
                let tile = document.createElement("div")
                // tile.id = `col${ij}`
                tile.className = "col border border-dark p-4"
                tile.addEventListener("click", clickNumber)
                row.appendChild(tile)
                /*when I set this.boardshipcs(tile), it passes tile into the funciton but also fires the fuction. 
                I want the fuction to only fire when clicked. the line below does not work.
                tile.addEventListener("click", this.boardChips(tile)); */
                /* bind these parameters (this, tile) to this fuction (this.boardChips). Bind allows you to pass in the
                tile value without running the function  */
                tile.addEventListener("click", this.boardChips.bind(this, tile));
                console.log(symbol)
            }
            App.appendChild(row)
        }
    }
    

}





//this function view.createboard should be a method/member of instance of that class



/*
onclick 
if player 1, display X 
if player 2, display O 

This hinges on knowing whether player 1 or player 2 is going
X or O? X or O is rendered on something -- 
a tile. X or O or blank. Needs to be within the rows.    */

/* Reset button appears once someone wins, which resets the entire game, does 
NOT refresh the page*/

//function that shows whose turn it is 

