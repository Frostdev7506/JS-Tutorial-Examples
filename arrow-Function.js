// <!-- Example 1 -->
// <!-- Normal sum function is JS  -->

function sum(a, b) {
    return a + b;
}

// <!-- Arrow function  -->
const sum2 = (a, b) => {
    return a + b;
}

// <!-- Arrow function  with less clutter -->
const sum3 = (a, b) => a + b;

// <!-- Example 2 -->
// <!-- function which returns boolean value -->
function isPositive(number) {
    return number >= 0
}

// <!-- Arrow function  -->
let isPositive2 = (number) => {
    return number >= 0
}

// <!-- Arrow function  with less clutter -->
// <!-- when there is only one input variable for the fucntion you can remove parenthesis () -->
let isPositive3 = number => number >= 0

// <!-- Example 3 -->
// <!-- Function that returns random numbers -->
function randomNumber() {
    return math.random
}

// <!-- Arrow function -->
let randomNumber2 = () => {
    return math.random
}

// <!-- Arrow function with less clutter -->
let randomNumber3 = () => math.random

// <!-- Example 4 -->
// <!-- Anonymous function -->
document.addEventListener('click', function () {
    console.log('click')
})

// <!-- Anonymous function with arrow -->
document.addEventListener('click', () => {
    console.log('click')
})

// <!-- Anonymous function with arrow and less clutter -->
document.addEventListener('click', () => console.log('click'))