class TicTacToeBoard {
    constructor() {
        this.tileArray = [];
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
//function that creates the board 
/*3 columns and 3 rows are created below*/
    createBoard() {
        let App = document.getElementById("App")
        for (let i = 0; i < 3; i++) {
            let row = document.createElement("div")
            row.className = "row"
            for (let j = 0; j < 3; j++) {
                let tileObj = new Tile()
                let tileHTMLElement = document.createElement("div")
                // tileHTMLElement.id = `col${ij}`
                tileObj.id = i * 3 + j //this is i and j in the for loop to get unique id
                tileHTMLElement.className = "col border border-dark p-4"
                //below, there are 9 "col" class items sitting in an array. The for loop above loops through them, adding an event listener to each. 
                //for all the tiles, they need to be bound to this clickhandler
                tileHTMLElement.addEventListener("click", clickNumber)
                row.appendChild(tileHTMLElement)
                /*when I set this.boardshipcs(tileHTMLElement), it passes tileHTMLElement into the funciton but also fires the fuction. 
                I want the fuction to only fire when clicked. the line below does not work.
                tileHTMLElement.addEventListener("click", this.boardChips(tileHTMLElement)); */
                
                /* bind these parameters (this, tileHTMLElement) to this fuction (this.boardChips). Bind allows you to pass in the
                tileHTMLElement value without running the function  */
                tileHTMLElement.addEventListener("click", this.boardChips.bind(this, tileHTMLElement));
                //intrduces tileHTML for the Tile class below.
                tileObj.tileHTML = tileHTMLElement
                this.tileArray.push(tileObj);
            }
            App.appendChild(row)
        }
        console.log(this.tileArray);
    }
}
class Tile {
    constructor() {
        //Setting up elements in the array
        this.hasBeenClicked = false;
        /*Below -- we have to bind this -- the scope of our class -- to the function.
        The clickability function is used within the scope of the tile class, and only within the scope of the tile class. 
        That's all this does, just locates clickability properly.*/
        this.clickability = this.clickability.bind(this);
        this.clickChange = this.clickChange.bind(this);
        this.id = "";
        //below, this links the tileHTMLelement from createBoard with the tile class. In the array this.tileArray, 
        //tileHTML = div.col.border.border-dark.p-4
        this.tileHTML = "";
    }

    clickChange () {
        this.hasBeenClicked = true;
    }


    clickability() {
        tileHTML.addEventListener("click", this.clickChange())
        console.log(clickChange)
    }
    
    
}
