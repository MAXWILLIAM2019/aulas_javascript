var nome = "Max William";
var idade = 26;
var frase = "Brasil é o melhor time do mundo!";
var listaFruta = ["Pêra", "Maçã", "Banana"];

//alert(nome + " tem " + idade + " anos de idade!");
//console.log(frase.toLowerCase());
console.log(listaFruta);
listaFruta.push("Abacaxi");
console.log(listaFruta);
//listaFruta.pop();
console.log(listaFruta);
console.log(listaFruta.length);
console.log(listaFruta.toString());
console.log(listaFruta.join("\n"));

//var concurso = {policia: "pm", tribunal: "tjam", saude: "semsa"}
//console.log(concursos.policia);

var concursos = [{policia: "pm", tribunal: "tjam", saude: "semsa"}, {fisco: "semef", municipal: "smtu", estadual: "detran"}];
console.log(concursos[0].tribunal);