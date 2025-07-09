"use strict";
// mensagem de boas vindas utilizando tipos e objetos
const paciente = {
    nome: "paulo",
    idade: 30,
    lindo: false
};
console.log(paciente);
function desejarBoasVindas(nome, idade, lindo) {
    if (lindo == true) {
        console.log(`Bem-vindo, ${nome}!`);
        console.log(`Você tem, ${idade} anos de idade!`);
    }
    else {
        console.log(`Olá, ${nome}!`);
        console.log(`infelizmente não aceitamos gente feia aqui!`);
    }
}
desejarBoasVindas(paciente.nome, paciente.idade, paciente.lindo || false);
