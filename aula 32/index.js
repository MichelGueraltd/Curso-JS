// Break e Continue
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
let i = 0 ;
do {
let numero = numeros [i];
// Continue - continua para próxima interação..
if (numero === 2) {
console.log('Pulei o número 2');
i++;
continue;
}

console.log(numero);

// Break - sai do laço!
if (numero === 7) {
console.log ('Encontrado, saindo...');
i++;
break;
}

i++;

}while (i < numeros.length);