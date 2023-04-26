// Factory Functions ou
// Funções Fabricas

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');

        },

        fala(assunto = 'falando sobre NADA.') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);

        }
    };
}

//const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
//console.log(p1.imc());
//const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
//console.log(p2.fala('falando sobre JS'));
//console.log(p2.imc());
//console.log(p1.sobrenome);
//console.log(p1.imc);

const p1 = criaPessoa('Gabrielle', 'Pereira', 1.8, 80);
const p2 = criaPessoa('Maria', 'Fernanda', 1.9, 40);
const p3 = criaPessoa('Michel', 'Cabral', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);



