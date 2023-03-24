const levelTable = document.querySelector("#levelTable")

const easyBtn = document.querySelector("#easyBtn");
const mediumBtn = document.querySelector("#mediumBtn")
const hardBtn = document.querySelector("#hardBtn");

const game = document.querySelector("#game");
const victory = document.querySelector("#victory");

const returnGame = document.querySelector("#returnGame");
const returnVictory = document.querySelector("#returnVictory");

const cardArray = [];
let numberOfCards = 0;

const currentScore = document.querySelector("#currentScore");
const finalScore = document.querySelector("#finalScore");

const imgsEasy = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg"
];

const imgsMedium = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",

    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg"
];

const imgsHard = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    
    "url('images/1.jpg",
    "url('images/2.jpg",
    "url('images/4.jpg",
    "url('images/1.jpg",
    "url('images/2.jpg",
    "url('images/4.jpg"
];

/********************
click on level buttons
*********************/

easyBtn.addEventListener("click", play.bind(this,20,"largeCard",imgsEasy));

mediumBtn.addEventListener("click", play.bind(this,30,"mediumCard",imgsMedium));

hardBtn.addEventListener("click", play.bind(this,42,"smallCard",imgsHard));

function show(element)
{
    element.classList.remove("hide");
}

function hide(element)
{
    element.classList.add("hide");
}

function shuffle(array)
{
    for(let i = (array.length - 1); i > 0; i--)
    {
        let randNb = Math.floor(Math.random() * (i - 1));

        let tmp = array[i];
        array[i] = array[randNb];
        array[randNb] = tmp;
    }
}

function createCards(n, cardSize,imgArray)
{
    for(let i = 0; i < n; i++)
    {
        const card = document.createElement("img");
        card.classList.add("card", cardSize);
        card.setAttribute("id",`card${i + 1}`);
        card.setAttribute("src", "images/back.jpg");
        
        cardsBoard.appendChild(card);
        shuffle(imgArray);
        card.addEventListener("click", flipCards.bind(this,card,imgArray));

        cardArray.push(card);
    }
}

function play(n, cardSize,imgArray)
{
    createCards(n, cardSize,imgArray);
    currentScore.innerText = score;
    numberOfCards = cardArray.length;
    hide(levelTable);
    show(game);
}

/********************
click on cards
*********************/

let firstCard;

let numberOpen = 0;

let score = 0;

let progress = 0;

function flipCards(card, imgArray)
{
    if(numberOpen == 0)
    {
        firstCard = card;
        card.setAttribute("src",imgArray[cardArray.indexOf(card)]);
        numberOpen++;
    } else if(numberOpen == 1){
        card.setAttribute("src",imgArray[cardArray.indexOf(card)]);
        numberOpen++;


        if(card.id == firstCard.id)
        {
            numberOpen = 1;
        }else{
            setTimeout(
                function(){
                    if(card.getAttribute("src") == firstCard.getAttribute("src"))
                    {
                        card.style.visibility = "hidden";
                        firstCard.style.visibility = "hidden";
                        score += 5;
                        progress += 2;
                        checkVictory();
                        currentScore.innerText = score;
                    }
                    else
                    {
                        unflipCards(card,firstCard);
                        numberOpen = 0;
                        if(score > 0){
                            score--;
                        }
                        currentScore.innerText = score;
                    }
                    numberOpen = 0;
                },
                2000
        )
        }
    }
}


function unflipCards(card,firstCard)
{
    card.setAttribute("src", "images/back.jpg");
    firstCard.setAttribute("src", "images/back.jpg");
}


/********************
check and show victory
*********************/

function checkVictory(){
    if(progress == numberOfCards)
    {
        finalScore.innerText = score;
        show(victory);
        hide(game);
        destroyCards();
    }
}

function destroyCards(){
    while(cardsBoard.firstChild){
        cardsBoard.removeChild(cardsBoard.firstChild);
    }
    numberOfCards = 0;
    progress = 0;
    score = 0;
    cardArray.length = 0;
}

returnGame.addEventListener("click", function(){
    hide(game); show(levelTable); destroyCards();
})

returnVictory.addEventListener("click", function(){
    hide(victory); show(levelTable);
})
