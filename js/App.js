function init() {
 let ttb = new TicTacToeBoard();
 ttb.createBoard()
}

window.onload = init


function resetFunction() {
    let App = document.getElementById("App")
    // App.removeChild(App)
    App.innerHTML=""
    init()
}

// function hideResetButton() {
//     if (gamedone = false) {
//         document.getElementById("resetbutton").style.visibility="hidden";
//     } else if (gamedone = true) {
//         document.getElementById("resetbutton").style.visibility="visible";
//     console.log(gamedone)
//     }
// }

// hideResetButton()

function whoseTurnDisplay() {
    //Here, display an X or an O depending on how many clicks in the game 
    row.className = "row"
    let xDisplay = document.createElement("div")
    xDisplay.className = "d-none"
}

// r/e render method -- my createBoard function is effectively rendering *everything* -- next time try not to do this, keep things
//a little less integrated so that I have more control to make individual changes. 

