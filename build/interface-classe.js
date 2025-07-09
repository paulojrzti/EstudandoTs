"use strict";
class Medico {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    dizerOi() {
        console.log(`Olá, eu sou ${this.nome} e sou um médico! tenho ${this.idade} anos.`);
    }
}
const medico = new Medico("Dr. Paulo", 35);
medico.dizerOi();
class Enfermeiro {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    dizerOi() {
        console.log(`Olá, eu sou ${this.nome} e sou um enfermeiro! tenho ${this.idade} anos.`);
    }
}
const enfermeiro = new Enfermeiro("Enfermeira Ana", 28);
enfermeiro.dizerOi();
