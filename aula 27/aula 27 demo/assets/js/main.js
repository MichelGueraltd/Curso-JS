// Exercícios com (For) 
const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },

];

const container = document.querySelector('.container');
const div = document.createElement9('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto); //Ou assim//tagCriada.innerHTML = texto, // Ou (innerText) Mais seguro!
    
    tagCriada.appendChild(tagCriado);
    div.appendChild(tagCriada);
}
containner.appendChild(div);