//currying

/* function soma(a, b) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5));
console.log(soma(2, 6));
*/

/* function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma(3));
console.log(soma(4));
console.log(soma(5));
console.log(soma(6));
*/

const students = [
    {
        name: 'max',
        grade: 7
    },
    {
        name: 'amanda',
        grade: 4
    },
    {
        name: 'luiza',
        grade: 10
    }
];

function getAprovados(studentsList) {
    return studentsList.filter(students => students.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getAprovados(students));

console.log('\nLista de alunos:');
console.log(students);

//constantes 
const pessoas = ['Agnes', 'Emily', 'William'];

//adicionar no final
pessoas.push('João');
//['Agnes', 'Emily', 'William', 'João']

//remove do incio
pessoas.shift();
//['Emily', 'William', 'João']

//altera valor por posição
pessoas[1] = 'Coutiru';
//['Emily', 'Coutiru', 'João']