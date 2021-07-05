function bingo(){
    debugger
  const pickCardNumbers = createCard();
  const card = showCard();
  const letsPlay = playBingo();
  const again = goAgain();

}
const cardNumbers = [];
const pickedNumbers = [];
let randomCardNumber = 0
let randomPickedNumber = 0
function playBingo(){
    do {
        
        const bomboNumbers = pickNumbersFromBombo();
        const match = compareAll();
        const itsOver = bingoFinished();
        break;
        
    }while (bingoFinished === false)
}


function createCard () {
    for(let i = 0; i < 5; i++){
        randomCardNumber = Math.floor(Math.random() * 15) + 1
       if (cardNumbers.includes(randomCardNumber) === false){
           cardNumbers.push(randomCardNumber)
       } else {
        i-- 
       } 
  }

}

function showCard(){
    console.log('Este es tu carton ' + cardNumbers.join(' '));

}



function pickNumbersFromBombo () {
    randomPickedNumber = Math.floor(Math.random() * 90) + 1
    if (pickedNumbers.includes(randomPickedNumber) === false) {
        pickedNumbers.push(randomPickedNumber);
        console.log(`El numero que ha salido es el ${randomPickedNumber}`)   

    } else {
        repeatedNumber()

    }

}
function repeatedNumber(){
    if(pickedNumbers.includes(randomPickedNumber) === true){
        pickAgain()
    }

}

function pickAgain() {
    function bingo(){
    debugger
  const pickCardNumbers = createCard();
  const card = showCard();
  const letsPlay = playBingo();
  const again = goAgain();

}
const cardNumbers = [];
const pickedNumbers = [];
let randomCardNumber = 0
let randomPickedNumber = 0
function playBingo(){
    do {
        
        const bomboNumbers = pickNumbersFromBombo();
        const match = compareAll();
        const itsOver = bingoFinished();
        break;
        
    }while (bingoFinished === false)
}


function createCard () {
    for(let i = 0; i < 5; i++){
        randomCardNumber = Math.floor(Math.random() * 15) + 1
       if (cardNumbers.includes(randomCardNumber) === false){
           cardNumbers.push(randomCardNumber)
       } else {
        i-- 
       } 
  }

}

function showCard(){
    console.log('Este es tu carton ' + cardNumbers.join(' '));

}

const goAgain = pickAgain();
const anotherNumber = repeatedNumber();

function pickNumbersFromBombo () {
    randomPickedNumber = Math.floor(Math.random() * 90) + 1
    if (pickedNumbers.includes(randomPickedNumber) === false) {
        pickedNumbers.push(randomPickedNumber);
        console.log(`El numero que ha salido es el ${randomPickedNumber}`)   

    } else {
        repeatedNumber();

    }

}
function repeatedNumber(){
    if(pickedNumbers.includes(randomPickedNumber) === true){
        pickAgain();
    }

}

function pickAgain() {
    pickNumbersFromBombo ();

} 
let j = 0

function compareAll() {
    for (j = 0; j < cardNumbers.length; j++){
        if(cardNumbers[j] === randomPickedNumber){
            cardNumbers[j] = 'X';
            console.log(`Tienes el ${randomPickedNumber}`)
            showCard(); 
        }
    } if (cardNumbers[j] != 'X'){
        console.log(`No tienes el ${randomPickedNumber}`);
        showCard();
  } 
}


 function bingoFinished (){
    if (cardNumbers.every((matchedNumber) => {
        matchedNumber === 'X';
       })){
           console.log('Ganaste!')
       } else {
           playBingo()
       };
 }
}
let j = 0

function compareAll() {
    for (j = 0; j < cardNumbers.length; j++){
        if(cardNumbers[j] === randomPickedNumber){
            cardNumbers[j] = 'X';
            console.log(`Tienes el ${randomPickedNumber}`)
            showCard(); 
        }
    } if (cardNumbers[j] != 'X'){
        console.log(`No tienes el ${randomPickedNumber}`);
        showCard();
  } 
}

const iHaveThisNumber = (markedNumber) =>
    markedNumber === 'X';



 function bingoFinished (){
    if (cardNumbers.every (iHaveThisNumber)){
        console.log('Ganaste!')
    } else {
        playBingo()
    }
 }

 function goAgain()