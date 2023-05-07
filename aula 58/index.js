
//                EXERCÍCIOS 

// Retorne as pessoas que tem o nome com 7 letras ou mais 
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);

// Retorne as pessoas com mais de 50 anos 
const pessoasComMaisIdade = pessoas.filter(obj => obj.idade >= 50);

// Retorne as pessoas cujo nome termina com A
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);
