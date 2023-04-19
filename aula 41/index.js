//Declaração de função (Function hoisting)
function falaOi() {
    console.log('Oie');
}
falaOi();

//Fisrt-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
}
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto 
const obj = {
    falar: function() {
        console.log('Estou falando.. ');
    }
};
obj.falar();