
//estudos
class Homem {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const Homem1 = new Homem("João", 25);
Homem1.apresentar();

class Jogador extends Homem {
    especialidade: string;

    constructor(nome: string, idade: number, especialidade: string) {
        super(nome, idade);
        this.especialidade = especialidade;
    }

    apresentar(): void {
        super.apresentar();
        console.log(`Eu sou jogador especializado em ${this.especialidade}.`);
    }
}
const jogador1 = new Jogador("Carlos", 30, "Faltas");
jogador1.apresentar();