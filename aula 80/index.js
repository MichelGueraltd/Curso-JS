function rand(min, max) {
    min *= 1000 ;
    max *= 1000 ;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        } , tempo);
        });
    }
// Promise.all Promise.rice Promise.resolve Promise.reject

//Promise.all
const promises = [
    'Primeiro valor ',
    esperaAi('Promisse 1', 3000),
    esperaAi('Promisse 1', 500),
    esperaAi('Promisse 1', 1000),
    'Outro valor'
];

Promise.all(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
});

