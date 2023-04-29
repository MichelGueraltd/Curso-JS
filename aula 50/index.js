// Funções Construtoras (Constructor functions)

//Função construtora ~> objetos 
//Função fabrica ~> objetos
//Construtora ~> Pessoa (new)
// (new)-> cria um objeto vazio! Sempre Usar na Função(construtora) A preimeira letra(Maíuscula)

function Pessoa(nome, sobrenome) {

    // Atributos ou metodos privados
    const ID = 123456;
    const metodoInterno = function () {

    };

    // Atributos ou metodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': sou um mertodo');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Fernanda');
p2.metodo();



