// forEach ->

// const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// a1.forEach(function(valor,indice,array){
// console.log(valor);
// });

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;

a1.forEach(valor => {
    total += valor;
});

console.log(total);