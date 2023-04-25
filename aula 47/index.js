// IIFE -> Immediately Invoked Function Expression
// Funçoes Imediatas 
// são exatamente funçõe que não afeta direto no Escopo Global

//Ex : Escopo aqui!

(function (idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.80);

//Não vai ser afetado! aqui ou la em cima 


