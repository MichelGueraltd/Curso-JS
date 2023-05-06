// Filter - Filtrando o arrays
// filter -> Filtrar Array
// map -> Modificar o array
//redcuce -> Reduzir o Array em um único valor

//EXERCÍCIOS (RETORNE TODOS NÚMEROS MAIORES QUE 10)

//(ATENÇÃO) Quando eu tenho uma função que retorne uma 
//condição nunca retorne (true ou felse) retorn a condição!

//ERRADO!
//const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
// if valor > 10 {
//     return true;
// }else {
//     return false;
// }
// }

//Correto!

//const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
//function callbackFilter(valor) {
//     return valor > 10;
// }
//const numerosFiltrados = numeros.filter(callbackFilter);
//console.log(numerosFiltrados);

//Retornando (Valor,Indices,Arrays)

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//    console.log(valor,indice,array);
//     return valor > 10;
// });
// console.log(numerosFiltrados);

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

