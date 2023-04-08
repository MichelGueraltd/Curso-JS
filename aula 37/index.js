// TRATANDO E LANÇANDO ERROS (try, catch, finally)
//try {
// É executada quando não a erros
//}catch (e) {
// É executado quando há erros
//} finally {
// Sempre
//}
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Data.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora();
console.log(hora);
}catch(e){
    //tratar erro
    //console.log(e);

}finally{
    console.log('Tenha uma ótima tarde.');
}