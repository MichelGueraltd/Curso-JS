// Map - Mapeando o Array
// Dobre os números 

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// Para cada elemento :
// Retorne apenas uma string com o nome da pessoa 

// const pessoas = [
//     {nome: 'Luiz', idade : 62},
//     {nome: 'Maria', idade : 23},
//     {nome: 'Eduardo', idade : 55},
//     {nome: 'Letícia', idade : 19},
//     {nome: 'Rosana', idade : 32},
//     {nome: 'Wallace', idade : 47},
// ];
// const nome = pessoas.map (obj => obj.nome);
// console.log(nome);

// Para cada elemento :
// Remova apenas a chave "nome" do objeto

// const pessoas = [
//     { nome: 'Luiz', idade: 62 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Eduardo', idade: 55 },
//     { nome: 'Letícia', idade: 19 },
//     { nome: 'Rosana', idade: 32 },
//     { nome: 'Wallace', idade: 47 },
// ];

// const nome = pessoas.map(obj => ({ idade: obj.idade }));
// console.log(nome);


// Adicione uma chave id em cada objeto
// (ATENÇÃO) ao usar o (Map) para não alterar o obj original! 
// Sempre usar o (new);
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const comIds = pessoas.map((obj,indice) => {
    const newObj = { ...obj};
    newObj.id = indice;
    return newObj;
});

console.log(comIds);
console.log(pessoas);
