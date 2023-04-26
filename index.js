const redux = require("redux");

const magn = (string) => string.toUpperCase();

const repeatThreeTimes = (string) => string.repeat(4);

const boldIt = (string) => string.bold()

const combinationOfAll = redux.compose(boldIt, repeatThreeTimes, magn)

// console.log(combinationOfAll("Nkaka"))

console.log(combinationOfAll("james"))