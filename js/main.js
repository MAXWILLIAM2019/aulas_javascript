function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    //window.open('https://www.grancursosonline.com.br')
    window.location.href = "https://www.grancursosonline.com.br"
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui :D"
    //alert("Mudar texto");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Página Carregada.")
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}
/*
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

*/