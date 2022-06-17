// Retorna o tamanho de uma string
const textSize = 'texto'.length;
console.log('Tamanho da string é: ${textSize}');

//Retorna array quebrando strting por delimitador
const splittedtext = 'Texto'.split('x');
console.log('\nArray com as posições separadas com delimitador:', splittedtext);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'Carr');
console.log('\nSubstituição de valor:', replacedText);

//Retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const allWoutherLastChar = 'Texto'.slice(0, -1);
console.log('\nTamanho da string menos a última letra:', allWoutherLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nSegunda até a última letra:', secondToEnd);

const duasPri = 'Texto'.substr(0, 2);
console.log('\nDuas primeiras letras são:', duasPri);

//Coverção com Numeros

const myNumber = 12.4032;

//transformar numero para string
const numberAsstring = myNumber.toString();
console.log('Número transforma em string:', typeof numberAsstring);

//Imprime numero com duas casa decimais
const fixeTwoDecimal = myNumber.toFixed(2);
console.log('\nNúmero com duas casa decimais:', fixeTwoDecimal);

//transforma string em float
console.log('\nString parseada para float:', parseFloat('10.12'));

//transforma string em Int
console.log('\nString parseada para float:', parseInt('20.12'));



