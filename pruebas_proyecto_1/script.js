const colorCodes = [
    "255, 87, 51",
    "120, 150, 200",
    "50, 205, 50",
    "255, 0, 0",
    "0, 0, 255"
];

let correctColor;
let correctCount = 0;
let wrongCount = 0;

const colorBoxContainer = document.getElementById("color-boxes");
const colorCodeText = document.getElementById("color-code");
const correctCountText = document.getElementById("correct-count");
const wrongCountText = document.getElementById("wrong-count");

function generateRandomColor() {
    return colorCodes[Math.floor(Math.random() * colorCodes.length)];
}

function generateVariations(correctColor) {
    const variations = [];

    for (let i = 0; i < colorCodes.length; i++) {
        if (colorCodes[i] === correctColor) {
            variations.push(correctColor);
        } else {
            const variation = colorCodes[Math.floor(Math.random() * colorCodes.length)];
            variations.push(variation);
        }
    }

    return variations;
}

function createColorBoxes(correctColor) {
    const colorVariations = generateVariations(correctColor);
    colorBoxContainer.innerHTML = '';

    colorVariations.forEach(color => {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = `rgb(${color})`;

        colorBox.addEventListener("click", () => {
            if (color === correctColor) {
                correctCount++;
            } else {
                wrongCount++;
            }

            if (correctCount === 3) {
                alert("¡Has ganado!");
                resetGame();
            } else if (wrongCount === 3) {
                alert("¡Has perdido!");
                resetGame();
            } else {
                newRound();
            }
        });

        colorBoxContainer.appendChild(colorBox);
    });
}

function newRound() {
    correctColor = generateRandomColor();
    colorCodeText.textContent = `RGB: ${correctColor}`;
    createColorBoxes(correctColor);
    correctCountText.textContent = correctCount;
    wrongCountText.textContent = wrongCount;
}

function resetGame() {
    correctCount = 0;
    wrongCount = 0;
    newRound();
}

newRound();
