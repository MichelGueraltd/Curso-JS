// - (Vetor) é um array de um única dimenção! (quando não tem nenhum array dentro dele)


// (FOR CLÁSSICO)
// for (let i 0; < i < frutas.length; i++ ) { 
// cont.log(frutas[i]);
//}

// For in -> (lê os índices ou chaves do objetos)
//                   0      1       2
//const frutas = ['Pera', 'Maçã', 'Uva'];
//for (let indice in frutas ){
//console.log(frutas [indice]);
//}

// (FOR IN)
const pessoa = { 
nome: 'Michel',
sobrenome:'Souza',
idade: 26
};

for (let chave in pessoa){
console.log(chave,pessoa[chave]);

}
