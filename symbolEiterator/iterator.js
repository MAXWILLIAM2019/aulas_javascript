//symbols
const uniqueId = Symbol('Hello');
//const uniqueId2 = Symbol('Hello');

//console.log(uniqueId === uniqueId2);

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
//console.log(it);
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());

while (true) {
    let { value, done } = it.next();

    if (done) {
        break;
    }
    console.log(value);
}

/*
for (let value of arr) {
    console.log(value);
}
*/

var str = 'Digital Inovation One'

const obj = {
    value: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.value[i - 1],
                    done: i > this.value.length
                };
            }
        };
    }
};

const it2 = obj[Symbol.iterator]()
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

// Generaters

function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    yield 2;

    console.log('Function!');
}

const it3 = hello();
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it4 = naturalNumbers();
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());

const obj2 = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj2) {
    console.log(value);
}