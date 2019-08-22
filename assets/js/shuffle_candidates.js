// Makes use of Fisher-Yates algorithm
// Found in: https://stackoverflow.com/a/2450976/1293256
var shuffle = function (array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

let container = document.querySelector(".office-election__container")
let candidates = document.getElementsByClassName("office-election__candidate");
let shuffled = shuffle([...candidates]);

// Need an independent counter to call code after all items appended
let items = 0;
shuffled.forEach((c) => {
	items++;
	container.appendChild(c)
	if (items === shuffled.length) {
		container.style.display = 'grid';
	}
});