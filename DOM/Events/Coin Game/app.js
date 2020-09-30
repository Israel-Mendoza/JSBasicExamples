function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");
coin.addEventListener("click", moveCoinRandomly);
moveCoinRandomly();

window.addEventListener("keydown", function (event) {

	if (isTouching(player, coin)) {
		moveCoinRandomly();
	}

	switch (event.key.toLowerCase()) {
		case "arrowup":
			moveUp(player);
			break;
		case "arrowdown":
			moveDown(player);
			break;
		case "arrowleft":
			moveLeft(player);
			break;
		case "arrowright":
			moveRight(player);
			break;
	}
});

// MOVERS

function moveUp(element) {
	let elementTopPosition = getNumberFromValue(getComputedStyle(element).top);
	elementTopPosition -= 50;
	elementTopPosition = positionDelimiter("up", elementTopPosition);
	element.style.top = `${elementTopPosition}px`;
	console.log(`New element top position: ${getPxValueFromNumber(elementTopPosition)}`);
}

function moveDown(element) {
	let elementTopPosition = getNumberFromValue(getComputedStyle(element).top);
	elementTopPosition += 50;
	elementTopPosition = positionDelimiter("down", elementTopPosition);
	element.style.top = `${elementTopPosition}px`;
	console.log(`New element top position: ${getPxValueFromNumber(elementTopPosition)}`);
}

function moveLeft(element) {
	element.style.transform = "scale(-1,1)";
	let elementLeftPosition = getNumberFromValue(getComputedStyle(element).left);
	elementLeftPosition -= 50;
	elementLeftPosition = positionDelimiter("left", elementLeftPosition);
	element.style.left = `${elementLeftPosition}px`;
	console.log(`New element left position: ${getPxValueFromNumber(elementLeftPosition)}`);
}

function moveRight(element) {
	element.style.transform = "scale(1,1)";
	let elementLeftPosition = getNumberFromValue(getComputedStyle(element).left);
	elementLeftPosition += 50;
	elementLeftPosition = positionDelimiter("right", elementLeftPosition);
	element.style.left = `${elementLeftPosition}px`;
	console.log(`New element left position: ${getPxValueFromNumber(elementLeftPosition)}`);
}


// GETTERS

function getNumberFromValue(value) {
	return parseInt(value.slice(0, -2));
}

function positionDelimiter(direction, value) {
	const viewPortHeight = window.innerHeight;
	const viewPortWidth = window.innerWidth;
	if (value < 0) {
		return 0;
	}
	if (direction.toLowerCase() === "down" || direction.toLowerCase() === "up") {
		return value > viewPortHeight ? viewPortHeight : value;
	} else {
		return value > viewPortWidth ? viewPortWidth : value;
	}
}


function moveCoinRandomly() {
	const topPosition = Math.floor(Math.random() * window.innerHeight);
	const leftPosition = Math.floor(Math.random() * window.innerHeight);
	coin.style.top = `${topPosition}px`;
	coin.style.left = `${leftPosition}px`;
}

