var sqr1, sqr2, sqr3, sqr4, sqr5, sqr6, sqr7, sqr8, sqr9;

function addDOMVariables() {
	sqr1 = document.getElementById("sqr-1");
	sqr2 = document.getElementById("sqr-2");
	sqr3 = document.getElementById("sqr-3");
	sqr4 = document.getElementById("sqr-4");
	sqr5 = document.getElementById("sqr-5");
	sqr6 = document.getElementById("sqr-6");
	sqr7 = document.getElementById("sqr-7");
	sqr8 = document.getElementById("sqr-8");
	sqr9 = document.getElementById("sqr-9");
}

function addListeners() {
	sqr1.addEventListener("click", function() {
		console.log("sqr1");
	})

	sqr2.addEventListener("click", function() {
		console.log("sqr2");
	})

	sqr3.addEventListener("click", function() {
		console.log("sqr3");
	})

	sqr4.addEventListener("click", function() {
		console.log("sqr4");
	})

	sqr5.addEventListener("click", function() {
		console.log("sqr5");
	})

	sqr6.addEventListener("click", function() {
		console.log("sqr6");
	})

	sqr7.addEventListener("click", function() {
		console.log("sqr7");
	})

	sqr8.addEventListener("click", function() {
		console.log("sqr8");
	})

	sqr9.addEventListener("click", function() {
		console.log("sqr9");
	})
}

window.onload = function() {
	addDOMVariables();
	addListeners();
}