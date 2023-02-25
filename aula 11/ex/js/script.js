const numero = Number(prompt('Digite um número :'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p> Raiz quadrada é: ${numero ** 05}. </p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.IsInteger(numero)}. </p>`;
texto.innerHTML += `<p> É NaN: ${Number.IsNaN(numero)}. </p>`;
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)}.</p>`
texto.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p> Com duas casas decimais:${numero.toFixed(2)}.</p>`;

