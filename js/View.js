
//function that creates the board 
/*3 columns and 3 rows are created below*/

class TicTacToeBoard {
    constructor() {
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

