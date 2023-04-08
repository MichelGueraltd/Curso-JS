//setInterval e setTimeout
function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-Br', {
        hour12: false
    });
}

//Não prrciso criar mais funções!

//function funcaoDoInterval() {
//  console.log(mostrarHora());
//}

//Função anônima
const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 3000);

setTimeout(function () {
    console.log('Ola Mundo!');
},5000);