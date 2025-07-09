"use strict";
const pacienteUm = {
    nome: "João",
    idade: 45,
    internado: true,
    cpf: "123.456.789-00",
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        bairro: "Jardim das Rosas",
        cidade: "São Paulo",
        estado: "SP"
    }
};
const pacienteDois = {
    nome: "Maria",
    idade: 30,
    internado: false,
    cpf: "123.000.449-00",
    endereco: {
        rua: "Avenida Central",
        numero: 456,
        bairro: "Centro",
        cidade: "Rio de Janeiro",
        estado: "RJ",
    },
};
console.log(pacienteUm);
console.log(pacienteDois);
