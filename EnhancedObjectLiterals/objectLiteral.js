var prop1 = 'DIO'

var obj = {
    prop1
};

console.log(obj);

//forma 1
var obj2 = {
    sum: function sum(a, b) {
        return a + b;
    }
};

console.log(obj2.sum(2, 2));

//forma 2
var obj3 = {
    sum2(a, b) {
    return a + b;
    }
};

console.log(obj3.sum2(2, 50));

//atribuição propriedade
var propName = 'test';

var objeto = {
    [propName + 'concat']: 'Prop Value'
};

console.log(objeto);