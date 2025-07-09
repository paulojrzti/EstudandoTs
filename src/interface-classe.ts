interface Pessoa { 
    nome: string,
    idade: number,
    dizerOi(): void
}

class Medico implements Pessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    dizerOi(): void {
        console.log(`Olá, eu sou ${this.nome} e sou um médico! tenho ${this.idade} anos.`);
    }
}
const medico = new Medico("Dr. Paulo", 35);
medico.dizerOi();

class Enfermeiro implements Pessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    dizerOi(): void {
        console.log(`Olá, eu sou ${this.nome} e sou um enfermeiro! tenho ${this.idade} anos.`);
    }
}
const enfermeiro = new Enfermeiro("Enfermeira Ana", 28);
enfermeiro.dizerOi();