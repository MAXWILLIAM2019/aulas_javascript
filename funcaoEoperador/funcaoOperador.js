//forma 1 funcao
function fn() {
    return 'Code here';
}
console.log(fn());

//forma 2 funcao 
const arrowFn = () => 'Code here 2';
console.log(arrowFn);

//forma 3 funcao
const arrowFn2 = () => {
    return 'Code here 3';
}
console.log(arrowFn2);

//funcoes tambem sao objetos
fn.prop = 'Posso criar propriedades';
console.log(fn());
console.log(fn.prop);


// ArrowFunction
globalThis.name = 'Nome no contexto de criação';
const getNameArrowFn = () => this.name;

//funcao normal
function gatName() {
    return this.name;
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    gatName
}

console.log(user.getNameArrowFn());
console.log(user.gatName());