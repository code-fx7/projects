// Add Game Logic
// Game state variables
let gameState = 0;
const fields = [0, 0, 0, 0, 1, 0, 2, 0, 0,];

const drawField = () => {
    fields.forEach((field, index) => {
        console.log("index", index);
        console.log("field", field);
    });
};

const onNewGame = () => {
    console.log("New Game Button clicked");
};

const onCellClick = (e) => {
    console.log(e.target.id);
};

window.addEventListener("DOMContentLoaded", () => {
    const newGameButton = ducument.getElementById("new-game"
    newGameButton.addEventListener(""))
})