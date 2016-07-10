var sqr1, sqr2, sqr3, sqr4, sqr5, sqr6, sqr7, sqr8, sqr9;
var sqr1Span, sqr2Span, sqr3Span, sqr4Span, sqr5Span, sqr6Span, sqr7Span, sqr8Span, sqr9Span;
var eventListener1 = true;
var eventListener2 = true;
var eventListener3 = true;
var eventListener4 = true;
var eventListener5 = true;
var eventListener6 = true;
var eventListener7 = true;
var eventListener8 = true;
var eventListener9 = true;

var startingPlayer = 'x';
var currentPlayer = startingPlayer;
var turns = 0;
var weHaveWinner = false;
var isDraw = false;

var multiplayer = false;

function SqrObj(num) {
	this.indexRef = num;
	this.state = "e";
	this.hasChangedState = false;

	this.changeState = function() {
		if (this.state === "e" && this.hasChangedState === false) {
			this.state = currentPlayer;
			this.hasChangedState = true;
			changePlayer(currentPlayer);
			turns += 1;
		}
	}

	this.resetState = function() {
		this.state = "e";
		this.hasChangedState = false;
	}
}

var sqrObj1 = new SqrObj(1);
var sqrObj2 = new SqrObj(2);
var sqrObj3 = new SqrObj(3);
var sqrObj4 = new SqrObj(4);
var sqrObj5 = new SqrObj(5);
var sqrObj6 = new SqrObj(6);
var sqrObj7 = new SqrObj(7);
var sqrObj8 = new SqrObj(8);
var sqrObj9 = new SqrObj(9);


function changePlayer(player) {
	if (player == "x") {
		currentPlayer = "o";
	} else if (player == "o") {
		currentPlayer = "x";
	}
}

function resetGame() {
	console.log("resetGame called.");
	sqrObj1.resetState();
	sqrObj2.resetState();
	sqrObj3.resetState();
	sqrObj4.resetState();
	sqrObj5.resetState();
	sqrObj6.resetState();
	sqrObj7.resetState();
	sqrObj8.resetState();
	sqrObj9.resetState();
	sqr1Span.innerHTML = "";
	sqr2Span.innerHTML = "";
	sqr3Span.innerHTML = "";
	sqr4Span.innerHTML = "";
	sqr5Span.innerHTML = "";
	sqr6Span.innerHTML = "";
	sqr7Span.innerHTML = "";
	sqr8Span.innerHTML = "";
	sqr9Span.innerHTML = "";
	eventListener1 = true;
	eventListener2 = true;
	eventListener3 = true;
	eventListener4 = true;
	eventListener5 = true;
	eventListener6 = true;
	eventListener7 = true;
	eventListener8 = true;
	eventListener9 = true;

	turns = 0;
	currentPlayer = startingPlayer;
	weHaveWinner = false;
}

function playerWins(player) {
	alert("Player " + player + " wins!");
	console.log("clearing the game...");
	weHaveWinner = true;
	setTimeout(function() {
		resetGame();
	}, 1000);
}

function draw() {
	alert("It's a draw. You guys suck!!");
	console.log("clearing the game...");
	weHaveWinner = true;
	setTimeout(function() {
		resetGame();
	}, 1000);	
}

function checkIfGameOver() {
	// determine which player has played last to pass in the playerWins function
	var player;
	if (currentPlayer == "x") {
		player = "o";
	} else if(currentPlayer == "o") {
		player = "x";
	}

	//horizontal wins
	if(sqrObj1.state == player && sqrObj2.state == player && sqrObj3.state == player) {
		playerWins(player);		
	} else if(sqrObj4.state == player && sqrObj5.state == player && sqrObj6.state == player) {
		playerWins(player);
	} else if(sqrObj7.state == player && sqrObj8.state == player && sqrObj9.state == player) {
		playerWins(player);
	}

	// vertical wins
	if(sqrObj1.state == player && sqrObj4.state == player && sqrObj7.state == player) {
		playerWins(player);		
	} else if(sqrObj2.state == player && sqrObj5.state == player && sqrObj8.state == player) {
		playerWins(player);
	} else if(sqrObj3.state == player && sqrObj6.state == player && sqrObj9.state == player) {
		playerWins(player);
	}

	//diagonal wins
	if(sqrObj1.state == player && sqrObj5.state == player && sqrObj9.state == player) {
		playerWins(player);		
	} else if(sqrObj3.state == player && sqrObj5.state == player && sqrObj7.state == player) {
		playerWins(player);
	}

	if(turns == 9 && weHaveWinner === false) {
		draw();
	}
}

function artificialIntelligence() {
	var player, enemy, nextSqrIndex;
	player = currentPlayer;
	if(player == "x") {
		enemy = "o";
	} else if(player == "o") {
		enemy = "x";
	}
	console.log("computer is: " + player + " enemy is: " + enemy);

	if(turns < 9 && isDraw === false) {
		player = currentPlayer;
		// avoid that enemy wins
		// horizontal
		if(sqrObj1.state == enemy && sqrObj2.state == enemy && sqrObj3.hasChangedState === false) {
			console.log("AHA");
			nextSqrIndex = 3;
		} else if(sqrObj2.state == enemy && sqrObj3.state == enemy && sqrObj1.hasChangedState === false) {
			nextSqrIndex = 1;
		} else if(sqrObj1.state == enemy && sqrObj3.state == enemy && sqrObj2.hasChangedState === false) {
			nextSqrIndex = 2;
		} else if(sqrObj4.state == enemy && sqrObj5.state == enemy && sqrObj6.hasChangedState === false) {
			nextSqrIndex = 6;
		} else if(sqrObj5.state == enemy && sqrObj6.state == enemy && sqrObj4.hasChangedState === false) {
			nextSqrIndex = 4;
		} else if(sqrObj4.state == enemy && sqrObj6.state == enemy && sqrObj5.hasChangedState === false) {
			nextSqrIndex = 5;
		} else if(sqrObj7.state == enemy && sqrObj8.state == enemy && sqrObj9.hasChangedState === false) {
			nextSqrIndex = 9;
		} else if(sqrObj8.state == enemy && sqrObj9.state == enemy && sqrObj7.hasChangedState === false) {
			nextSqrIndex = 7;
		} else if(sqrObj7.state == enemy && sqrObj9.state == enemy && sqrObj8.hasChangedState === false) {
			nextSqrIndex = 8;
		// vertical
		} else if(sqrObj1.state == enemy && sqrObj4.state == enemy && sqrObj7.hasChangedState === false) {
			nextSqrIndex = 7;
		} else if(sqrObj4.state == enemy && sqrObj7.state == enemy && sqrObj1.hasChangedState === false) {
			nextSqrIndex = 1;
		} else if(sqrObj1.state == enemy && sqrObj7.state == enemy && sqrObj4.hasChangedState === false) {
			nextSqrIndex = 4;
		} else if(sqrObj2.state == enemy && sqrObj5.state == enemy && sqrObj8.hasChangedState === false) {
			nextSqrIndex = 8;
		} else if(sqrObj5.state == enemy && sqrObj8.state == enemy && sqrObj2.hasChangedState === false) {
			nextSqrIndex = 2;
		} else if(sqrObj2.state == enemy && sqrObj8.state == enemy && sqrObj5.hasChangedState === false) {
			nextSqrIndex = 5;
		} else if(sqrObj3.state == enemy && sqrObj6.state == enemy && sqrObj9.hasChangedState === false) {
			nextSqrIndex = 9;
		} else if(sqrObj6.state == enemy && sqrObj9.state == enemy && sqrObj3.hasChangedState === false) {
			nextSqrIndex = 3;
		} else if(sqrObj3.state == enemy && sqrObj9.state == enemy && sqrObj6.hasChangedState === false) {
			nextSqrIndex = 6;
		// diagonal
		} else if(sqrObj1.state == enemy && sqrObj5.state == enemy && sqrObj9.hasChangedState === false) {
			nextSqrIndex = 9;
		} else if(sqrObj5.state == enemy && sqrObj9.state == enemy && sqrObj1.hasChangedState === false) {
			nextSqrIndex = 1;
		} else if(sqrObj1.state == enemy && sqrObj9.state == enemy && sqrObj5.hasChangedState === false) {
			nextSqrIndex = 5;
		} else if(sqrObj3.state == enemy && sqrObj5.state == enemy && sqrObj7.hasChangedState === false) {
			nextSqrIndex = 7;
		} else if(sqrObj5.state == enemy && sqrObj7.state == enemy && sqrObj3.hasChangedState === false) {
			nextSqrIndex = 3;
		} else if(sqrObj3.state == enemy && sqrObj7.state == enemy && sqrObj5.hasChangedState === false) {
			nextSqrIndex = 5;
		} else {
			// if 2 adjacent tiles available, finish & win
			// horizontal
			if(sqrObj1.state == player && sqrObj2.state == player && sqrObj3.hasChangedState === false) {
				nextSqrIndex = 3;
			} else if(sqrObj2.state == player && sqrObj3.state == player && sqrObj1.hasChangedState === false) {
				nextSqrIndex = 1;
			} else if(sqrObj1.state == player && sqrObj3.state == player && sqrObj2.hasChangedState === false) {
				nextSqrIndex = 2;
			} else if(sqrObj4.state == player && sqrObj5.state == player && sqrObj6.hasChangedState === false) {
				nextSqrIndex = 6;
			} else if(sqrObj5.state == player && sqrObj6.state == player && sqrObj4.hasChangedState === false) {
				nextSqrIndex = 4;
			} else if(sqrObj4.state == player && sqrObj6.state == player && sqrObj5.hasChangedState === false) {
				nextSqrIndex = 5;
			} else if(sqrObj7.state == player && sqrObj8.state == player && sqrObj9.hasChangedState === false) {
				nextSqrIndex = 9;
			} else if(sqrObj8.state == player && sqrObj9.state == player && sqrObj7.hasChangedState === false) {
				nextSqrIndex = 7;
			} else if(sqrObj7.state == player && sqrObj9.state == player && sqrObj8.hasChangedState === false) {
				nextSqrIndex = 8;
			// vertical
			} else if(sqrObj1.state == player && sqrObj4.state == player && sqrObj7.hasChangedState === false) {
				nextSqrIndex = 7;
			} else if(sqrObj4.state == player && sqrObj7.state == player && sqrObj1.hasChangedState === false) {
				nextSqrIndex = 1;
			} else if(sqrObj1.state == player && sqrObj7.state == player && sqrObj4.hasChangedState === false) {
				nextSqrIndex = 4;
			} else if(sqrObj2.state == player && sqrObj5.state == player && sqrObj8.hasChangedState === false) {
				nextSqrIndex = 8;
			} else if(sqrObj5.state == player && sqrObj8.state == player && sqrObj2.hasChangedState === false) {
				nextSqrIndex = 2;
			} else if(sqrObj2.state == player && sqrObj8.state == player && sqrObj5.hasChangedState === false) {
				nextSqrIndex = 5;
			} else if(sqrObj3.state == player && sqrObj6.state == player && sqrObj9.hasChangedState === false) {
				nextSqrIndex = 9;
			} else if(sqrObj6.state == player && sqrObj9.state == player && sqrObj3.hasChangedState === false) {
				nextSqrIndex = 3;
			} else if(sqrObj3.state == player && sqrObj9.state == player && sqrObj6.hasChangedState === false) {
				nextSqrIndex = 6;
			// diagonal
			} else if(sqrObj1.state == player && sqrObj5.state == player && sqrObj9.hasChangedState === false) {
				nextSqrIndex = 9;
			} else if(sqrObj5.state == player && sqrObj9.state == player && sqrObj1.hasChangedState === false) {
				nextSqrIndex = 1;
			} else if(sqrObj1.state == player && sqrObj9.state == player && sqrObj5.hasChangedState === false) {
				nextSqrIndex = 5;
			} else if(sqrObj3.state == player && sqrObj5.state == player && sqrObj7.hasChangedState === false) {
				nextSqrIndex = 7;
			} else if(sqrObj5.state == player && sqrObj7.state == player && sqrObj3.hasChangedState === false) {
				nextSqrIndex = 3;
			} else if(sqrObj3.state == player && sqrObj7.state == player && sqrObj5.hasChangedState === false) {
				nextSqrIndex = 5;
			} else {
			// if no good option available, take a random turn
				console.log("random assignment");
				nextSqrIndex = Math.floor(Math.random() * 9) + 1;
				var nextSqrIndexSqr = "sqrObj" + nextSqrIndex + ".hasChangedState"
				var nextSqrIndexTaken = eval(nextSqrIndexSqr);
				while (nextSqrIndexTaken === true) {
					nextSqrIndex = Math.floor(Math.random() * 9) + 1;
					nextSqrIndexSqr = "sqrObj" + nextSqrIndex + ".hasChangedState"
					nextSqrIndexTaken = eval(nextSqrIndexSqr);
				}
			}
		}

		// play with the selected index
		console.log(nextSqrIndex);	
		var SqrChange = "sqrObj" + nextSqrIndex + ".changeState();";
		eval(SqrChange);
		var SqrHTML = "sqr" + nextSqrIndex + "Span.innerHTML = sqrObj" + nextSqrIndex + ".state.toUpperCase();"
		eval(SqrHTML);
	};
}

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
	sqr1Span = document.getElementById("sqr-1-span");
	sqr2Span = document.getElementById("sqr-2-span");
	sqr3Span = document.getElementById("sqr-3-span");
	sqr4Span = document.getElementById("sqr-4-span");
	sqr5Span = document.getElementById("sqr-5-span");
	sqr6Span = document.getElementById("sqr-6-span");
	sqr7Span = document.getElementById("sqr-7-span");
	sqr8Span = document.getElementById("sqr-8-span");
	sqr9Span = document.getElementById("sqr-9-span");
	newBtn = document.getElementById("new-btn");
}

function addListeners() {
	
	sqr1.addEventListener("click", function() {
		if (eventListener1 === true) {
			sqrObj1.changeState();
			sqr1Span.innerHTML = sqrObj1.state.toUpperCase();
			checkIfGameOver();
			if (multiplayer === false && weHaveWinner === false) {
				artificialIntelligence();
				checkIfGameOver();
			}
			eventListener1 = false;
		}
	});

	sqr2.addEventListener("click", function() {
		if (eventListener2 === true) {
			sqrObj2.changeState();
			sqr2Span.innerHTML = sqrObj2.state.toUpperCase();
			checkIfGameOver();
			if (multiplayer === false && weHaveWinner === false) {
				artificialIntelligence();
				checkIfGameOver();
			}
			eventListener2 = false;
		}
	});

	sqr3.addEventListener("click", function() {
		if (eventListener3 === true) {
			sqrObj3.changeState();
			sqr3Span.innerHTML = sqrObj3.state.toUpperCase();
			checkIfGameOver();
			if (multiplayer === false && weHaveWinner === false) {
				artificialIntelligence();
				checkIfGameOver();
			}
			eventListener3 = false;
		}
	});

	sqr4.addEventListener("click", function() {
		if (eventListener4 === true) {
			sqrObj4.changeState();
			sqr4Span.innerHTML = sqrObj4.state.toUpperCase();
			checkIfGameOver();
			if (multiplayer === false && weHaveWinner === false) {
				artificialIntelligence();
				checkIfGameOver();
			}
			eventListener4 = false;
		}
	});

	sqr5.addEventListener("click", function() {
		if (eventListener5 === true) {
			sqrObj5.changeState();
			sqr5Span.innerHTML = sqrObj5.state.toUpperCase();
			checkIfGameOver();
			if (multiplayer === false && weHaveWinner === false) {
				artificialIntelligence();
				checkIfGameOver();
			}
			eventListener5 = false;
		}
	});

	sqr6.addEventListener("click", function() {
		if (eventListener6 === true) {
			sqrObj6.changeState();
			sqr6Span.innerHTML = sqrObj6.state.toUpperCase();
			checkIfGameOver();
			if (multiplayer === false && weHaveWinner === false) {
				artificialIntelligence();
				checkIfGameOver();
			}
			eventListener6 = false;
		}
	});

	sqr7.addEventListener("click", function() {
		if (eventListener7 === true) {
			sqrObj7.changeState();
			sqr7Span.innerHTML = sqrObj7.state.toUpperCase();
			checkIfGameOver();
			if (multiplayer === false && weHaveWinner === false) {
				artificialIntelligence();
				checkIfGameOver();
			}
			eventListener7 = false;
		}
	});

	sqr8.addEventListener("click", function() {
		if (eventListener8 === true) {
			sqrObj8.changeState();
			sqr8Span.innerHTML = sqrObj8.state.toUpperCase();
			checkIfGameOver();
			if (multiplayer === false && weHaveWinner === false) {
				artificialIntelligence();
				checkIfGameOver();
			}
			eventListener8 = false;
		}
	});

	sqr9.addEventListener("click", function() {
		if (eventListener9 === true) {
			sqrObj9.changeState();
			sqr9Span.innerHTML = sqrObj9.state.toUpperCase();
			checkIfGameOver();
			if (multiplayer === false && weHaveWinner === false) {
				artificialIntelligence();
				checkIfGameOver();
			}
			eventListener9 = false;
		}
	});

	newBtn.addEventListener("click", function() {
		resetGame();
	});
}

function centerGameDiv() {
	var columnWidth = document.getElementById("main-column").offsetWidth;
	var gameWidth = 300;
	var padding = (columnWidth - gameWidth) / 2;
	var toEval = 'document.getElementById("box-container").style.paddingLeft = "' + padding + 'px";';
	eval(toEval);
}

window.onload = function() {
	addDOMVariables();
	addListeners();
	centerGameDiv();
}