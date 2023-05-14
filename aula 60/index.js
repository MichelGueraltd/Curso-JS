// Exercícios Reduce - Reduzindo o array


//Exercícios (Reduce)
//some todos os números
//               0   1   2  3  4  5  6  7  8   9  10  11  12 
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     acumulador += valor;
//     return acumulador;
// }, 0);
// console.log(total);

//Retorne um array com os pares (Filter)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     if (valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);
// console.log(total);

//Retorne um array com o dobro dos valores (Map)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);
// console.log(total);

// Retorne as pessoas mais velhas

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 },
];
const maisVelha = pessoas.reduce(function(acumulador, valor){
if (acumulador.idade > valor.idade) return acumulador ;
return valor;
});
console.log(maisVelha);
