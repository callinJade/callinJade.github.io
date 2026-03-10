/* charcter class */
class Character {
    constructor(name, elementId) {
        this.name = name;
        this.maxHp = 100;
        this.hp = 100;
        this.isBlocking = false;
		this.block = 0;
        this.elementId = elementId;
		this.color = "#cde5ea";
    }
}

var player1;
var player2;
var currentPlayer;
var opponentPlayer;

/* after page loads, do this */
window.onload = function() {
	/* Player 1 */
	player1 = new Character("Player 1", "player-1-elements");
	/* Player 2 */
	player2 = new Character("Player 2", "player-2-elements");
	currentPlayer = player1;
	opponentPlayer = player2;

	// color button choices
	const allColorOptions = document.querySelectorAll('.color-options');

	allColorOptions.forEach(container => {
		const pType = container.getAttribute('data-player');
		const buttons = container.querySelectorAll('.color-btn');

		// default name colors
		document.querySelector('#player-1-elements h2').style.color = "#cde5ea";
    	document.querySelector('#player-2-elements h2').style.color = "#cde5ea";

		// when buttons clicked
		buttons.forEach(btn => {
			btn.onclick = function() {
				const chosenColor = this.getAttribute('data-color');
				
				// visual change in player label when color is chosen
				if (pType === "p1") {
					player1.color = chosenColor;
					document.querySelector('#player-1-elements h2').style.color = chosenColor;
				} else {
					player2.color = chosenColor;
					document.querySelector('#player-2-elements h2').style.color = chosenColor;
				}

				// visual change in button when color is chosen
				buttons.forEach(b => b.style.border = "2px solid #cde5ea");
				this.style.border = "3px solid #605804";
			};
		});
	});

	/* button functionality */
	document.getElementById("attack").onclick = attack;
	document.getElementById("block").onclick = block;
	document.getElementById("heal").onclick = heal;
	
	document.getElementById("start").onclick = startGame;
	document.getElementById("play-again").onclick = function() {
		location.reload();
	};


}



/* ---------- Action functions ---------- */
function attack() {
	var damage = randomize(2, 20);
	if (opponentPlayer.isBlocking == false) {
		opponentPlayer.hp -= damage;
	}
	// opponent is blocking
	else {
		damage = damage - opponentPlayer.block;
		if (damage < 0){damage = 0;}
		opponentPlayer.hp -= (damage);
		opponentPlayer.isBlocking = false;
		opponentPlayer.block = 0;
	}
	// strong attack animation
	if (damage >= 15) {
		triggerShake(opponentPlayer.elementId);
	}
	if (opponentPlayer.hp < 0) {opponentPlayer.hp = 0;}
	// updates visual health bar
	updateHealthBars();
	// updates action log
	updateActionLog(currentPlayer.name + " dealt " + damage + " damage");
	// check for game over
	if (player1.hp <= 0 || player2.hp <= 0) {
		checkGameOver();
	}
	// switches turn
	else {
		switchTurn();
	}
	
}

function block() {
	if (currentPlayer.isBlocking == false)
	{
		var block = randomize(0, 10);
		currentPlayer.block = block;
		currentPlayer.isBlocking = true;
		// updates action log
		updateActionLog(currentPlayer.name + " blocks " + block + " damage against next attack");
	}
	// player already blocking
	else {
		// updates action log
		updateActionLog(currentPlayer.name + " sits idly (still blocking for " + currentPlayer.block + " damage against next attack)");
	}
	// switches turn
	switchTurn();
}

function heal() {
	currentPlayer.hp += 10;
	if (currentPlayer.hp > currentPlayer.maxHp){currentPlayer.hp = currentPlayer.maxHp;}
	// updates visual health bar
	updateHealthBars();
	// updates action log
	updateActionLog(currentPlayer.name + " healed 10 hp");
	// switches turn
	switchTurn();
}

/* calculates random number for attack and block */
function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*------------------------------------------------*/

/* switches turn */
function switchTurn() {
	var tempCurrPlayer = currentPlayer;
	currentPlayer = opponentPlayer;
	opponentPlayer = tempCurrPlayer;
	var turn = document.getElementById("turn-text");
	turn.textContent = currentPlayer.name + "'s Turn";
	turn.style.color = currentPlayer.color;
}

/* updates action log */
function updateActionLog (message) {
	var log = document.getElementById("action-log");
	var newMessage = document.createElement('ul');
	newMessage.textContent = message;
	newMessage.style.color = currentPlayer.color;
	log.prepend(newMessage);

}

/* when start button pressed */
function startGame() {
	var turn = document.getElementById("turn-text");
	turn.textContent = "Player 1's Turn";
	var Startbtn = document.getElementById('start');
	Startbtn.classList.add('hidden');
	document.getElementById("setup-menu").remove();
	var actionMenu = document.getElementById("action-menu");
	actionMenu.classList.remove('hidden');
}

/* checks for game over */
function checkGameOver() {
	let winner = player1.hp > 0 ? player1.name : player2.name;
	document.getElementById("action-menu").remove();
	var turn = document.getElementById("turn-text");
	turn.textContent = winner + " Won!";
	var btn = document.getElementById('play-again');
	btn.classList.remove('hidden');
}

/* updates health bars */
function updateHealthBars() {
	// calculate new health percentage
    let p1Percent = (player1.hp / player1.maxHp) * 100;
    let p2Percent = (player2.hp / player2.maxHp) * 100;
    // can't go lower than 0
    p1Percent = Math.max(0, p1Percent);
    p2Percent = Math.max(0, p2Percent);
	// visual width update
    let p1Bar = document.getElementById("player-1-health-fill");
    let p2Bar = document.getElementById("player-2-health-fill");
    p1Bar.style.width = p1Percent + "%";
    p2Bar.style.width = p2Percent + "%";
    // visual color update (if needed)
    updateBarColor(p1Bar, p1Percent);
    updateBarColor(p2Bar, p2Percent);
    // visual number update
    document.getElementById("player-1-health-text").textContent = Math.ceil(player1.hp);
    document.getElementById("player-2-health-text").textContent = Math.ceil(player2.hp);
}
/* health bar color based on current hp */
function updateBarColor(barElement, percent) {
    if (percent < 25) {
        barElement.style.backgroundColor = "#ff4d4d";
    } else if (percent < 50) {
        barElement.style.backgroundColor = "#ffd11a";
    } else {
        barElement.style.backgroundColor = "#4caf50";
    }
}


/* animation */
function triggerShake(playerID) {
	var player = document.getElementById(playerID);
	player.classList.add("shake");
	setTimeout(function() 
				{player.classList.remove('shake');}
			  , 500);
}