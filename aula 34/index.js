// Escreva uma função chamada ePaisagem que 
// recebe doi argumento, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo
// paisagem.

//function ePaisagem (largura, altura){
//    return largura > altura ? true : false;
//}
// console.log(ePaisagem(1080, 1920));

//Melhoria 
//function ePaisagem(largura, altura){ 
//    return largura >= altura;
//}
//console.log(ePaisagem(1080, 1920));

//Melhoria com (=>)(Arrow functions)
const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1080, 1920));
