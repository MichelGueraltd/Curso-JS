// Atribuição via desestruturação por (Objetos)
const pessoa = {
nome: 'Luiz',
sobrenome: 'Miranda',
idade:30,
endereço: {
    rua:'Av Brasil', 
    numero: 320      
} 
 };
 // Atribuição via desestruturação 
 //const {nome, sobrenome, idade, endereço} = pessoa;
 
 // Objeto dentro do objeto 
 //const {endereço: {rua, numero} } = pessoa; 
 
 //... rest
 
 const {nome, sobrenome, idade,...resto} = pessoa;
 console.log(nome, sobrenome, idade, resto);