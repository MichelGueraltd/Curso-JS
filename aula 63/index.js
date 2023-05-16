// Object.definiProperty
// Object.definiProperty - uma chave
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: true

    });
    
    // Object.definiProperties - várias chaves

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave 
            value: nome, // valor 
            writable: true, // pode alterar
            configurable: true // configurável
        },

        preco : {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configurável
        },
    });

}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}



