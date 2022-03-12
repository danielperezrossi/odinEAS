let squareActive = document.getElementsByClassName("square");
let btnClearBoard = document.getElementById("clearBtn");
let btnNewBoard = document.getElementById("newBtn");

function generateMatrix(newBoard) {
	const gridContainer = document.getElementById("matrix");
	for (let i = 0; i < newBoard; i++) {
		const div = document.createElement("div");
		div.classList.add("square");
		div.textContent = i + 1;
		gridContainer.appendChild(div);
	}
}

function startGame(newBoard) {
	generateMatrix(newBoard);
	paintSquares();
}

startGame();

function paintSquares() {
	for (let i = 0; i < squareActive.length; i++) {
		squareActive[i].addEventListener("mouseenter", function (event) {
			event.target.style.background = "yellow";
			event.target.style.color = "black";
			false;
		});
	}
}

btnClearBoard.addEventListener("click", () => {
	for (let i = 0; i < squareActive.length; i++) {
		squareActive[i].style.background = "#cccccc";
		squareActive[i].style.color = "#cccccc";
	}
});

btnNewBoard.addEventListener("click", () => {
	newBoard = prompt("How many squares?");
	for (let i = 0; i < squareActive.length; i + 1) {
		squareActive[i].remove();
	}
	if (newBoard > 1000) {
		newBoard = prompt("CALM DOWN! Let's try something below 1000: ");
	}
	startGame(newBoard);
});
