//criação objeto simples
const myText = 'Hello Word!';
myText.split('');
console.log(myText);

//criação objeto 
const myText2 = String('Hello Word prototype!');
console.log(myText2)

function Animal () {
    this.qtdPatas = 4;
}

const cachorro = new Animal();
console.log('Tenho ' + cachorro.qtdPatas + ' patas!');


class Pessoa {
    constructor(name) {
        this.name = name;
    }
}
class PessoaFilho extends Pessoa {
    constructor(name, cpf) {
        super(name);
        this.cpf = cpf;
    }
}

class Carro  {
    constructor() {
        this.cor = 'azul';
    }

    andar() {
        console.log('andando...');
    }
}

class Palio extends Carro {
    constructor(buzina) {
        super();
        this.cor = 'verde';
        this.buzina = 'biiii';
    }

    frear() {
        console.log('Freando...')
    }
}

const teste = new Palio(false);
const test2 = new Palio(true);

teste.andar();
console.log(teste.buzina);
teste.frear();