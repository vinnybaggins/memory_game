const easy = document.querySelector("#easy");

const medium = document.querySelector("#medium");

const hard = document.querySelector("#hard");

const difficultyTable = document.querySelector("#difficulty-table");

const cardsBoard = document.querySelector('#cardsBoard');

const cardArray = [];

const backgroundEasy = [
    "url('images/memory/1.jpg')",
    "url('images/memory/2.jpg')",
    "url('images/memory/3.jpg')",
    "url('images/memory/4.jpg')",
    "url('images/memory/5.jpg')",
    "url('images/memory/6.jpg')",
    "url('images/memory/7.jpg')",
    "url('images/memory/8.jpg')",
    "url('images/memory/9.jpg')",
    "url('images/memory/10.jpg')",
    
    "url('images/memory/1.jpg')",
    "url('images/memory/2.jpg')",
    "url('images/memory/3.jpg')",
    "url('images/memory/4.jpg')",
    "url('images/memory/5.jpg')",
    "url('images/memory/6.jpg')",
    "url('images/memory/7.jpg')",
    "url('images/memory/8.jpg')",
    "url('images/memory/9.jpg')",
    "url('images/memory/10.jpg')"
];

const backgroundMedium = [
    "url('images/memory/1.jpg')",
    "url('images/memory/2.jpg')",
    "url('images/memory/3.jpg')",
    "url('images/memory/4.jpg')",
    "url('images/memory/5.jpg')",
    "url('images/memory/6.jpg')",
    "url('images/memory/7.jpg')",
    "url('images/memory/8.jpg')",
    "url('images/memory/9.jpg')",
    "url('images/memory/10.jpg')",

    "url('images/memory/1.jpg')",
    "url('images/memory/2.jpg')",
    "url('images/memory/3.jpg')",
    "url('images/memory/4.jpg')",
    "url('images/memory/5.jpg')",
    "url('images/memory/6.jpg')",
    "url('images/memory/7.jpg')",
    "url('images/memory/8.jpg')",
    "url('images/memory/9.jpg')",
    "url('images/memory/10.jpg')",

    "url('images/memory/1.jpg')",
    "url('images/memory/2.jpg')",
    "url('images/memory/3.jpg')",
    "url('images/memory/4.jpg')",
    "url('images/memory/5.jpg')",
    "url('images/memory/6.jpg')",
    "url('images/memory/7.jpg')",
    "url('images/memory/8.jpg')",
    "url('images/memory/9.jpg')",
    "url('images/memory/10.jpg')"
];

const backgroundHard = [
    "url('images/memory/1.jpg')",
    "url('images/memory/2.jpg')",
    "url('images/memory/3.jpg')",
    "url('images/memory/4.jpg')",
    "url('images/memory/5.jpg')",
    "url('images/memory/6.jpg')",
    "url('images/memory/7.jpg')",
    "url('images/memory/8.jpg')",
    "url('images/memory/9.jpg')",
    "url('images/memory/10.jpg')",
    "url('images/memory/11.jpg')",
    "url('images/memory/12.jpg')",
    
    "url('images/memory/1.jpg')",
    "url('images/memory/2.jpg')",
    "url('images/memory/3.jpg')",
    "url('images/memory/4.jpg')",
    "url('images/memory/5.jpg')",
    "url('images/memory/6.jpg')",
    "url('images/memory/7.jpg')",
    "url('images/memory/8.jpg')",
    "url('images/memory/9.jpg')",
    "url('images/memory/10.jpg')",
    "url('images/memory/11.jpg')",
    "url('images/memory/12.jpg')",
    
    "url('images/memory/1.jpg')",
    "url('images/memory/2.jpg')",
    "url('images/memory/3.jpg')",
    "url('images/memory/4.jpg')",
    "url('images/memory/5.jpg')",
    "url('images/memory/6.jpg')",
    "url('images/memory/7.jpg')",
    "url('images/memory/8.jpg')",
    "url('images/memory/9.jpg')",
    "url('images/memory/10.jpg')",
    "url('images/memory/11.jpg')",
    "url('images/memory/12.jpg')",
    
    "url('images/memory/1.jpg')",
    "url('images/memory/2.jpg')",
    "url('images/memory/4.jpg')",
    "url('images/memory/1.jpg')",
    "url('images/memory/2.jpg')",
    "url('images/memory/4.jpg')"
];

const returnButton = document.querySelector("#returnButton");

const scoreNumber = document.querySelector("#scoreNumber");

let score = 0;

let progress = 0;

let sumOfCards;

let timeOpen = 2000;


// create cards

function createCards(n,className,background){

    for (let i = 0; i < n; i++) {	
		
        const card = document.createElement("div");

        card.classList.add("card",className);
        
        card.setAttribute('id','card'+i);
		
		card.addEventListener('click', flipCard.bind(this,card,background));

        cardArray.push(card);

        cardsBoard.appendChild(card);

    }

    sumOfCards = cardArray.length;

}

function showCards(){
        
    difficultyTable.classList.toggle("hide");
    game.classList.toggle("hide");
    returnButton.classList.toggle("hide");

}

function shuffle(array){

    for (let i = (array.length - 1); i > 0; i--){
    
        let j = Math.floor(Math.random() * (i - 1));

        let k = array[i];
        array[i] = array [j];
        array[j] = k;

    }

}

// choose difficulty

easy.addEventListener("click", function(){

    shuffle(backgroundEasy);

    createCards(20,"largeCard",backgroundEasy);
    
    showCards();

    window.scroll(0,64);
    
})

medium.addEventListener("click", function(){

    shuffle(backgroundMedium);

    createCards(30,"mediumCard",backgroundMedium);
    
    showCards();

    window.scroll(0,64);
    
})

hard.addEventListener("click", function(){

    shuffle(backgroundHard);

    createCards(42,"smallCard",backgroundHard);
    
    showCards();

    window.scroll(0,64);
    
})

returnButton.addEventListener("click", function(){

    showCards();

    while(cardsBoard.firstChild){
        cardsBoard.removeChild(cardsBoard.firstChild);
    }

    cardArray.length = 0;
    
});


// click on cards

let numberOpen = 0;

let firstCard;

function flipCard(card,background){
    
    if (numberOpen == 0){//if opening the first card   
        
        card.style.backgroundImage = background[cardArray.indexOf(card)];

        firstCard = card;
        
        numberOpen++;

    }else if(numberOpen == 1){//if opening the second card

        numberOpen++;
        
        card.style.backgroundImage = background[cardArray.indexOf(card)];

        if(card.id == firstCard.id){//if the same card is pressed
            numberOpen = 1;
        }else if(card.style.backgroundImage == firstCard.style.backgroundImage){//if the cards are equal

            setTimeout(
                function(){
                    card.style.visibility = "hidden";
                    firstCard.style.visibility = "hidden";

                    numberOpen = 0;
                    score += 5;
                    scoreNumber.innerText = score;
                    progress += 2;

                    if(progress == sumOfCards){//if player took all cards
                        showVictory();
                    }
                },
                timeOpen
            )
        }else if(card.style.backgroundImage != firstCard.style.backgroundImage){//if cards are different

            setTimeout(
                function(){
                    card.style.backgroundImage = "";
                    firstCard.style.backgroundImage = "";

                    numberOpen = 0;

                    if(score > 0){
                        score -= 1;
                    }

                    scoreNumber.innerText = score;
                },
                timeOpen
            )
        }
    }
}

function showVictory(){
    while(cardsBoard.firstChild){
        cardsBoard.removeChild(cardsBoard.firstChild);
    }
    scoreBoard.innerText = ("You won!\n Score: " + score);
    score = 0;
    scoreNumber.innerText = 0;
    
    cardArray.length = 0;

}