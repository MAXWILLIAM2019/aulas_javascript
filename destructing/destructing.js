var arr = ['Aplle', 'Banana', 'Batato'];

var Aplle = arr[0];
var Banana = arr[1];
var Batato = arr[2];

//destructing array

var [aplle2, banana2, batato2] = ['aplle', 'banana', 'Batato'];
var [aplle3] = arr[0];
console.log(Aplle, aplle2);
console.log(aplle3);

//objeto
var obj = {
    name: 'max'
};

//destructing obj
var { name } = obj;
console.log(name);

//distructing nao altera o obj
var {name: name2} = obj;
name2 = 'William';
console.log(obj);
console.log(name2);
