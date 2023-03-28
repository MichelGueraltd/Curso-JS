// While e Do While - Estrtura de repetição

//let i = 0; // Cria Váriavel 
//while (i <= 10) { //Checar a condição e entrar dentro do bloco
  //  console.log(i);// executar a ação 
    //i++; //atualizar a váriavel de controle 
    // (NUNCA) Esquecer de colocar(i++)! Evitar Laço infinito..
    //sem ele minha váriavel de controle vai ser sempre (0) ou valor colocado..
    // Ex: O é menor ou igual a 10
//}

function random(min, max) {
const r = Math.random() * (max, min) + min;
return Math.floor(r);
}

const min = 1 ;
const max = 50 ;
let rand = 10 ;

while (rand !== 10) {
    console.log(rand);
}
console.log('#######');

// Diferença entre Do While e While 
// do while - executa o códico depois checa a condição!
// While - chaca s condição depois executa o código!
do {
console.log(rand);
}while(rand !== 10);