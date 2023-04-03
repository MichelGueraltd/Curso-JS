//Escerva uma função que recebe um número e (ok)
//retorne o seguinte:(ok)
//Número é divisível por 3 = Fizz(ok)
//Número é divisível por 5 = Buz(ok)
//Número é divisível por 3 e 5 = FizzBuzz(ok)
//Número Não é divisível por 3 e 5 = Retorna o próprio número(ok)
//Checa se o número é realmente um número (ok)
// Use a função com numeros de 0 a 100 (ok)

function FizzBuzz (numero) {
    if (typeof numero !== 'number') return numero;
    if (numero  % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero  % 3 === 0) return 'Fizz';
    if (numero  % 5 === 0) return 'Buzz';
return numero;
}

console.log('a', FizzBuzz('a'))
for (let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i));
} 
    
