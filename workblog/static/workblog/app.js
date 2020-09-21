var currentGamePosition = [1, 3, 5, 7];
var gameForm = document.getElementById('main-form');
const errorDiv = document.getElementById('id-error');
let submitButton = document.getElementById('submit-button');
const gameTitle = document.getElementById('game-title');
const gameSubtitle = document.getElementById('game-subtitle');

function turnListOfIntegersIntoString(list) {
    let stringFromList = list.join('');
    return stringFromList;
}

// API call
function getMachineAnswer(position, callback) {
    let stringInteger = turnListOfIntegersIntoString(position);
    $.getJSON(window.location.href + 'machine/' + stringInteger, function(data) {
        newMove = data;
        callback(data);
    });
}


























// Game UI/UX

function breakSpaceTheCards () {
    let allCards = document.getElementsByClassName('card');
    for (var index = 0; index < allCards.length; index++) {
        if (allCards[index].id.endsWith('0')) {
            gameForm.insertBefore(document.createElement('br'), allCards[index]);
        }
    };
}

function uncheckCardsInOtherRows (row) {
    let allCards = document.getElementsByClassName('card');
    for (let index = 0, len = allCards.length; index < len; index++) {
        if (allCards[index].id.slice(3, 4) == row) {
        } else {
            allCards[index].classList.remove("clicked");
        }
    }
}   

function toggleCard (e) {
    if (e.target.classList.contains('clicked')) {
        e.target.classList.remove('clicked');
    } else {
        e.target.classList.add('clicked');
        let currentRow = e.target.id.slice(3, 4);
        uncheckCardsInOtherRows(currentRow);
    }
}

function addClickEventListenerToCards() {
    let allCards = document.getElementsByClassName('card');
    for (i = 0; i < allCards.length; i++) {
        allCards[i].addEventListener('click', toggleCard);
    }
}

function createCards(currentGamePosition) {
    gameForm.innerHTML = '';
    gameTitle.style.visibility = 'visible';
    gameSubtitle.style.visibility = 'visible';
    submitButton.style.visibility = 'visible';
    currentGamePosition.forEach((element, index) => {
        for (i = 0; i < element; i++) {
            var cardElement = document.createElement('div');
            cardElement.id = 'row'+index+'number'+i;
            cardElement.className = 'card';
            gameForm.appendChild(cardElement);
        }
    });
    breakSpaceTheCards();
    addClickEventListenerToCards();
}

// Runs at file load
createCards(currentGamePosition);





















// AI mechanism
function turnAllCardsToGreen(allCards) {
    for (i = 0; i < allCards.length; i++) {
        allCards[i].style.backgroundColor = '#709dac';
    }
}

function visuallyRemoveCards(json) {
    let rowValue = json['row'] - 1;
    let cardsInRow = document.querySelectorAll('[id^="row'+rowValue+'"]')
    for (i = 0; i < json['number_of_cards']; i++) {
        cardsInRow[i].style.backgroundColor = '#FF8C00';
    }
    setTimeout(function() { 
        actuallyRemoveCards(json['row']-1, json['number_of_cards']);
    }, 2000); 
}

function actuallyRemoveCards(row, amount) {
    currentGamePosition[row] = currentGamePosition[row] - amount;
    createCards(currentGamePosition);
}

function machinesTurn(currentGamePosition) {
    if (currentGamePosition.every(item => item === 0)) {
        gameTitle.style.visibility = 'hidden';
        gameSubtitle.style.visibility = 'hidden';
        gameForm.innerHTML = '<br>Game over, you lost! <br> But don\'t worry, you had a tough opponent. <br> AI made by my friend, <a href="https://github.com/golobluka">Luka</a>. <br> He is studying mathematics at University of Ljubljana <br><br><a onclick="createCards([1, 3, 5, 7])">Play again</a> ';
        submitButton.style.visibility = 'hidden';
    } else if (currentGamePosition == [0, 0, 0, 0]) {
        gameTitle.style.visibility = 'hidden';
        gameSubtitle.style.visibility = 'hidden';
        gameForm.innerHTML = '<br>Game over, you won! <br> You must be really smart. Did you do it on your first try? <br> Please, let me know about your victory via my email, <i>rklancar@gmail.com</i> <br> AI made by my friend, <a href="https://github.com/golobluka">Luka</a>. <br> He is studying mathematics at University of Ljubljana <br><br><a onclick="createCards([1, 3, 5, 7])">Play again</a> ';
        submitButton.style.visibility = 'hidden';
    } else {
        let allCards = document.getElementsByClassName('card');
        turnAllCardsToGreen(allCards);
        getMachineAnswer(currentGamePosition, visuallyRemoveCards);
    }
}

function buttonClick () {
    let allSelectedCards = document.getElementsByClassName('clicked');
    if (allSelectedCards.length == 0){
        errorDiv.style.visibility = 'visible';
    } else {
        errorDiv.style.visibility = 'hidden';
        let row = allSelectedCards[0].id.slice(3, 4);
        let numberOfCards = allSelectedCards.length
        currentGamePosition[row] = currentGamePosition[row] - numberOfCards
        createCards(currentGamePosition)
        machinesTurn(currentGamePosition);
    }
}




submitButton.addEventListener('click', buttonClick)