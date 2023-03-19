// Atribuição via desestruturação por (Arrays)
// ... rest , ... spread 
// indices        0      1    2     3     4     5     6     7
//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
//const [um, dois, tres, ... resto] = numeros; (usando o rest)
//console.log(um, dois, tres);
//console.log(resto);
//                           INDICES

//                   1          2          3
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//console.log(numeros [2][2])
//const [,[,,seis]] = numeros;
const [lista1, lista2, lista3] = numeros;
console.log(lista2[0]);