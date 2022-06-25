function randomNumber() {
    return Math.random() * 10;
}

function mult(a , b = randomNumber()) {
    return a * b;
}

console.log(mult(5));