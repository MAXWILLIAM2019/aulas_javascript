//normal somar varios argumentos
function soma(a, b) {
    var value = 0;

    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

console.log(soma(5, 5, 5, 3, 2));

//com rest operator
function soma2(...args) {
   return args.reduce((acc, value) => acc + value, 0);
}

console.log(soma2(5, 5, 5, 3, 2));

//com rest operator + arrowFunction
const soma3 = (a, b, ...rest) => {
     console.log(a, b, ...rest);
 }
 
 console.log(soma3(5, 5, 5, 3, 2));

 //spread operator + multiplicação
const mult = (...arg) => arg.reduce((acc, value) => acc * value, 1);

const soma4 = (...rest) => {
    return mult(...rest);
}

console.log(soma4(5, 5, 5, 3, 2));