
// (Operacao Ternaria) 
// (condicao) (?)'Valor para verdadeiro' (:) 'Valor para falso';
const pontuacaoUSuario = 1000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta'; // <- falback
console.log(nivelUsuario, corPadrao);


//if (pontuacaoUSuario >= 1000){
//    console.log('Usuário VIP');
//}else {
//    console.log('Usuário normal');
//}