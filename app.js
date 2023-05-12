const Redux = require('redux') 

const compose = Redux.compose; 

const makeUppercase = (string) => (string.toUpperCase());
const makeBold = (string) => (string.bold());
const makeRepeat = (string) => (string.repeat(4));

const makeUppercaseMakeBoldMakeRepeat = compose(makeUppercase,makeBold,makeRepeat);

console.log(makeUppercaseMakeBoldMakeRepeat("Nkaka"))
