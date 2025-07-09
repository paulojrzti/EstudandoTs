"use strict";
class Homem {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}
const Homem1 = new Homem("João", 25);
Homem1.apresentar();
class Jogador extends Homem {
    constructor(nome, idade, especialidade) {
        super(nome, idade);
        this.especialidade = especialidade;
    }
    apresentar() {
        super.apresentar();
        console.log(`Eu sou jogador especializado em ${this.especialidade}.`);
    }
}
const jogador1 = new Jogador("Carlos", 30, "Faltas");
jogador1.apresentar();
