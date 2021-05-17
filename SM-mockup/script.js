const game = document.getElementById('cardsArray');

//create an array of red card objects with the value 1

const redCardArray = [];

const redCard = {
    color: 'red',
    value: 1,
    place: 'undefined'
}

function redArray() {
    let newCard = redCard;
    let x = redCardArray;
    for(x.length = 0; x.length < 5; x.push(redCard))
    newCard++;
}
redArray();

// create an array of red card objects with the value 2

const redCardArray2 = [];

const redCard2 = {
    color: 'red',
    value: 2,
    place: 'undefined'
}

function redArray2() {
    let newCard = redCard2;
    let x = redCardArray2;
    for(x.length = 0; x.length < 5; x.push(redCard2))
    newCard++;
}
redArray2();

// combine both arrays into a new array of all red card objects

const redCardsetArray = redCardArray2.concat(redCardArray);

//create an array of orange card objects with the value 1

const orangeCardArray = [];

const orangeCard = {
    color: 'orange',
    value: 1,
    place: 'undefined'
}

function orangeArray() {
    let newCard = orangeCard;
    let x = orangeCardArray;
    for(x.length = 0; x.length < 5; x.push(orangeCard))
    newCard++;
}
orangeArray();

// create an array of orange card objects with the value 2

const orangeCardArray2 = [];

const orangeCard2 = {
    color: 'orange',
    value: 2,
    place: 'undefined'
}

function orangeArray2() {
    let newCard = orangeCard2;
    let x = orangeCardArray2;
    for(x.length = 0; x.length < 5; x.push(orangeCard2))
    newCard++;
}
orangeArray2();

// combine both arrays into a new array of all orange card objects

const orangeCardsetArray = orangeCardArray2.concat(orangeCardArray);

//create an array of yellow card objects with the value 1

const yellowCardArray = [];

const yellowCard = {
    color: 'yellow',
    value: 1,
    place: 'undefined'
}

function yellowArray() {
    let newCard = yellowCard;
    let x = yellowCardArray;
    for(x.length = 0; x.length < 5; x.push(yellowCard))
    newCard++;
}
yellowArray();

// create an array of yellow card objects with the value 2

const yellowCardArray2 = [];

const yellowCard2 = {
    color: 'yellow',
    value: 2,
    place: 'undefined'
}

function yellowArray2() {
    let newCard = yellowCard2;
    let x = yellowCardArray2;
    for(x.length = 0; x.length < 5; x.push(yellowCard2))
    newCard++;
}
yellowArray2();

// combine both arrays into a new array of all yellow card objects

const yellowCardsetArray = yellowCardArray2.concat(yellowCardArray);

//create an array of green card objects with the value 1

const greenCardArray = [];

const greenCard = {
    color: 'green',
    value: 1,
    place: 'undefined'
}

function greenArray() {
    let newCard = greenCard;
    let x = greenCardArray;
    for(x.length = 0; x.length < 5; x.push(greenCard))
    newCard++;
}
greenArray();

// create an array of green card objects with the value 2

const greenCardArray2 = [];

const greenCard2 = {
    color: 'green',
    value: 2,
    place: 'undefined'
}

function greenArray2() {
    let newCard = greenCard2;
    let x = greenCardArray2;
    for(x.length = 0; x.length < 5; x.push(greenCard2))
    newCard++;
}
greenArray2();

// combine both arrays into a new array of all green card objects

const greenCardsetArray = greenCardArray2.concat(greenCardArray);

//create an array of blue card objects with the value 1

const blueCardArray = [];

const blueCard = {
    color: 'blue',
    value: 1,
    place: 'undefined'
}

function blueArray() {
    let newCard = blueCard;
    let x = blueCardArray;
    for(x.length = 0; x.length < 5; x.push(blueCard))
    newCard++;
}
blueArray();

// create an array of blue card objects with the value 2

const blueCardArray2 = [];

const blueCard2 = {
    color: 'blue',
    value: 2,
    place: 'undefined'
}

function blueArray2() {
    let newCard = blueCard2;
    let x = blueCardArray2;
    for(x.length = 0; x.length < 5; x.push(blueCard2))
    newCard++;
}
blueArray2();

// combine both arrays into a new array of all blue card objects

const blueCardsetArray = blueCardArray2.concat(blueCardArray);

//create an array of violet card objects with the value 1

const violetCardArray = [];

const violetCard = {
    color: 'violet',
    value: 1,
    place: 'undefined'
}

function violetArray() {
    let newCard = violetCard;
    let x = violetCardArray;
    for(x.length = 0; x.length < 5; x.push(violetCard))
    newCard++;
}
violetArray();

// create an array of violet card objects with the value 2

const violetCardArray2 = [];

const violetCard2 = {
    color: 'violet',
    value: 2,
    place: 'undefined'
}

function violetArray2() {
    let newCard = violetCard2;
    let x = violetCardArray2;
    for(x.length = 0; x.length < 5; x.push(violetCard2))
    newCard++;
}
violetArray2();

// combine both arrays into a new array of all violet card objects

const violetCardsetArray = violetCardArray2.concat(violetCardArray);

// combine all arrays into a new array of all colors and values

const cardSet = redCardsetArray.concat((
                orangeCardsetArray.concat(
                    (yellowCardsetArray.concat(
                        (greenCardsetArray.concat(
                            (blueCardsetArray.concat(
                                (violetCardsetArray))))))))));

console.log(cardSet)
