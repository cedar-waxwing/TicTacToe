//MODEL
let symbol = "";
let gamedone = false


//CONTROLLER
let ttb = new TicTacToeBoard();

function init() {
 ttb.createBoard()
}

window.onload = init


function resetFunction() {
    let App = document.getElementById("App")
    // App.removeChild(App)
    App.innerHTML=""
    ttb = new TicTacToeBoard();
    init()
}

//VIEW
class TicTacToeBoard {
    constructor() {
        this.tileArray = [];
        this.clickEvent = this.clickEvent.bind(this)
        this.clickCount = 0
    }
    //function that creates the board 
    /*3 columns and 3 rows are created below*/
    createBoard() {
        gamedone = false;
        let App = document.getElementById("App")
        for (let i = 0; i < 3; i++) {
            let row = document.createElement("div")
            row.className = "row"
            for (let j = 0; j < 3; j++) {
                let tileObj = new Tile()
                let tileHTMLElement = document.createElement("div")
                // tileHTMLElement.id = `col${ij}`
                tileObj.id = i * 3 + j //this is i and j in the for loop to get unique id
                tileHTMLElement.className = "col border border-warning p-4 tile mx-auto"
                //below, there are 9 "col" class items sitting in an array. The for loop above loops through them, adding an event listener to each. 
                //for all the tiles, they need to be bound to this clickhandler
                tileHTMLElement.addEventListener("click", this.clickEvent.bind(this, tileObj));
                row.appendChild(tileHTMLElement)
                /*when I set this.boardshipcs(tileHTMLElement), it passes tileHTMLElement into the funciton but also fires the fuction. 
                I want the fuction to only fire when clicked. the line below does not work.
                tileHTMLElement.addEventListener("click", this.boardChips(tileHTMLElement)); */

                /* bind these parameters (this, tileHTMLElement) to this fuction (this.boardChips). Bind allows you to pass in the
                tileHTMLElement value without running the function  */
                // tileHTMLElement.addEventListener("click", this.boardChips.bind(this, tileHTMLElement));
                //intrduces tileHTML for the Tile class below.
                tileObj.tileHTML = tileHTMLElement
                this.tileArray.push(tileObj);
            }
            App.appendChild(row)
        }
        console.log(this.tileArray);
    }
    whichSymbol() {
        if (this.clickCount % 2 == 0) {
            return "O"
        } return "X"
    }

    boardChips(tile) {
        console.log(tile);

    }

    clickEvent(obj) {
        if (!obj.hasBeenClicked && gamedone == false) {
            document.getElementById("whoseturn").innerHTML = this.whichSymbol()
            this.clickCount++
            console.log("this is the first time I was clicked.")
            //this is a problem because all tiles have the same class, button
            // document.getElementById("btn").disabled = true
            obj.clickChange()
            symbol = this.whichSymbol();
            obj.tileHTML.innerText = symbol;
            obj.whoami = symbol;
            this.whoWins();
        } else {
            console.log("they clicked me again")
        }
        console.log(obj)
    }
    //whoWins is supposed tocheck for winning possibilities, alert if there is a winner, and make the reset 
    //button pop up if there's a winner. Theoretically, it should also set and remove a box around the X or the O
    whoWins() {
        // console.log("in the who wins function")
        // console.log(this.tileArray[0].whoami)
        // console.log(this.tileArray[1].whoami)
        // console.log(this.tileArray[2].whoami)

        symbol = this.whichSymbol();
        //putting everything in if gamedone == false prevents more alerts from popping up. Does not stop additional clicks.
        if (gamedone == false) {
            if (this.tileArray[0].whoami == symbol && this.tileArray[1].whoami == symbol && this.tileArray[2].whoami == symbol) {
                setTimeout("alert(symbol + ' wins!');", 250)
                gamedone = true;
                // setTimeout("alert('hello world');", 1)
            } if (this.tileArray[0].whoami == symbol && this.tileArray[3].whoami == symbol && this.tileArray[6].whoami == symbol) {
                setTimeout("alert(symbol + ' wins!');", 250)
                gamedone = true;
            } if (this.tileArray[0].whoami == symbol && this.tileArray[4].whoami == symbol && this.tileArray[8].whoami == symbol) {
                setTimeout("alert(symbol + ' wins!');", 250)
                gamedone = true;
            } if (this.tileArray[1].whoami == symbol && this.tileArray[4].whoami == symbol && this.tileArray[7].whoami == symbol) {
                setTimeout("alert(symbol + ' wins!');", 250)
                gamedone = true;
            } if (this.tileArray[2].whoami == symbol && this.tileArray[4].whoami == symbol && this.tileArray[6].whoami == symbol) {
                setTimeout("alert(symbol + ' wins!');", 250)
                gamedone = true;
            } if (this.tileArray[2].whoami == symbol && this.tileArray[5].whoami == symbol && this.tileArray[8].whoami == symbol) {
                setTimeout("alert(symbol + ' wins!');", 250)
                gamedone = true;
            } if (this.tileArray[3].whoami == symbol && this.tileArray[4].whoami == symbol && this.tileArray[5].whoami == symbol) {
                setTimeout("alert(symbol + ' wins!');", 250)
                gamedone = true;
            } if (this.tileArray[6].whoami == symbol && this.tileArray[7].whoami == symbol && this.tileArray[8].whoami == symbol) {
                setTimeout("alert(symbol + ' wins!');", 250)
                gamedone = true;
            }
            else if (this.clickCount == 9) {
                setTimeout("alert('Tie!');", 250)
                gamedone = true;
                console.log("It's a draw!")
            }
        }
    }
}
// if (this.whoami[0] == "X" && this.whoami[1] == "X" && this.whoami[2] == "X") {
//     window.alert("X wins!");
//     //let resetBtn = document.createElement("div")
//     //let resetBtn.classname = "col btn"
// }

class Tile {
    constructor() {
        //Setting up elements in the array
        this.hasBeenClicked = false;
        /*Below -- we have to bind this -- the scope of our class -- to the function.
        The clickability function is used within the scope of the tile class, and only within the scope of the tile class. 
        That's all this does, just locates clickability properly.*/
        // this.clickability = this.clickability.bind(this);
        this.clickChange = this.clickChange.bind(this);
        this.id = "";
        //below, this links the tileHTMLelement from createBoard with the tile class. In the array this.tileArray, 
        //tileHTML = div.col.border.border-dark.p-4
        this.tileHTML = "";
        // console.log(this.tileHTML)
        //b
        this.whoami = ""
    }

    clickChange() {
        this.hasBeenClicked = true;
        // tileHTML.addEventListener("click", this.clickChange())
    }


}
