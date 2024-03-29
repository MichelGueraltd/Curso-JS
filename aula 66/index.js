/* 
Javascript é baseado em protótipos para passar porpriedades e métodos 
de um objeto de protótipo para outro.

Definição de protótipo
Prótotipo é o termo usado para se referir ao que foi criado pela 
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uima referência interna para um protótipo (_proto_)
que vem da propriedade prototype da função construtora que foi usada para 
criá-lo. Quando tentemos acessar um membro de um objeto, primeiro o motor 
do JS vai tentar encotrar este membro no próprio objeto e depois a cadeia 
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro. 
*/


// Prototypes
// Construtora -> molde (classe)
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//instância 
const pessoa1 = new Pessoa ('Luiz', 'O.'); //<- Pessoa = Função construtora
const pessoa2 = new Pessoa ('Maria', 'A.'); //<- Pessoa = Função construtora
console.dir(pessoa1);
console.dir(pessoa2);
