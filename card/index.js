var cardDivs = document.querySelectorAll('.card');
var levelOneContainer = document.querySelector('.level-1');
var levelTwoContainer = document.querySelector('.level-2');
var scoreHeadingElement = document.querySelector('.score');

var clickedCardDivs = [];

for(var i = 0; i < cardDivs.length; i++) {
    cardDivs[i].addEventListener('click', handleCardClick);
}

function handleCardClick() {
    var clickedCard = event.target;

    // console.log(clickedCard.tagName);

    if (clickedCard.tagName == "DIV" && clickedCardDivs.length != 2) {
        clickedCard.classList.remove('unselected');
        clickedCardDivs.push(clickedCard);
    } else if (clickedCard.tagName == "IMG") {
        alert("Do not click a card twice!!!");
    }

    if(clickedCardDivs.length == 2) {
        var firstImage = clickedCardDivs[0].firstElementChild;
        var secondImage = clickedCardDivs[1].firstElementChild;
        
        if (firstImage.id == secondImage.id) {
            console.log("Success");
            clickedCardDivs = [];
        } else {
            setTimeout(flipOver, 1500);
        }
    }
}

function flipOver() {
    if (clickedCardDivs.length == 2) {
        clickedCardDivs[0].classList.add('unselected');
        clickedCardDivs[1].classList.add('unselected');

        clickedCardDivs = [];
    }    
}
