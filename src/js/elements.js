// Elemento do home
const btnSimulation = document.getElementById('btnSimulation');

// Elementos da page Simula emprestimo 
const btnCalc = document.getElementById("calcular-emprestimo")
const resultShow = document.getElementById("resultado-emprestimo");
const base = document.querySelector('.base');
const valorEmprestimo = document.getElementById('valor-emprestimo');
const prazo = document.getElementById('prazo');

const btnNossoCliente = document.getElementById('page-nosso-cliente');

// seção de exibição do FAG
const faPlus = document.querySelectorAll('.fa-plus');
const duvidas = document.querySelectorAll('.duvida');


export { 
    btnSimulation, 
    btnCalc,
    resultShow,
    base,
    valorEmprestimo,
    prazo,
    faPlus,
    duvidas,
    btnNossoCliente
};