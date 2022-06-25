//funcao classica
function soma(a, b) {
    return a + b;
}

console.log(soma(5, 5));

//funcao em objeto
var soma2 = function (a, b) {
    return a + b;
}

console.log(soma2(1, 1));

// estrutra funcao arrowFunction
const soma3 = (a, b) => a + b;
console.log(soma(3, 3));

//vantagens arrowFunction
var obj = {
    showContext: function showContext(){
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();