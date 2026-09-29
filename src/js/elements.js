// Elemento do home
const btnSimulation = document.getElementById('btnSimulation');

// Elementos da page Simula emprestimo 
const btnCalc = document.getElementById("calcular-emprestimo")
const resultShow = document.getElementById("resultado-emprestimo");
const base = document.querySelector('.base');
const valorEmprestimo = document.getElementById('valor-emprestimo');
const prazo = document.getElementById('prazo');

const boxElementSejaCliente = document.getElementById('element-btn-seja-cliente');
const btnNossoCliente = document.getElementById('page-nosso-cliente');

// seção de exibição do FAG
const faPlus = document.querySelectorAll('.fa-plus');
const duvidas = document.querySelectorAll('.duvida');

// elementos da pagina Seja nosso cliente
const btnCadastrar = document.getElementById('cadastrar');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');
const inputCidade = document.getElementById('cidade');
const inputTextArea = document.getElementById('mensagem');
const checkBoxSouAp = document.getElementById('sou-aposentado');

const classErro = document.getElementById('apply-erro');


export { 
    btnSimulation, 
    btnCalc,
    resultShow,
    base,
    valorEmprestimo,
    prazo,
    faPlus,
    duvidas,
    boxElementSejaCliente,
    btnNossoCliente,
    btnCadastrar,
    inputNome,
    inputEmail,
    inputTelefone,
    inputCidade,
    inputTextArea,
    classErro,
    checkBoxSouAp
};