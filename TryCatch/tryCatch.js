/*
function verificaPalindromo(string) {
    if (!string) return "String inválida";
    return string === string.split('').reverse().join('');
}

verificaPalindromo('Cat');
*/

function verificaPalindromo(string) {
    if (!string) throw "String inválida";
    return string === string.split('').reverse().join('');
}

function tryCatchExemplo (string) {
    try {
        verificaPalindromo(string)
    } catch (e) {
        console.log(e)
        // outra opção trow e;
    }
    finally {
        console.log('A string enviada foi:' + string);
    }
}

tryCatchExemplo('xx');