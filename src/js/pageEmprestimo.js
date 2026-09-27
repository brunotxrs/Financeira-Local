import { btnCalc, valorEmprestimo, prazo , base, resultShow, duvidas, faPlus, btnNossoCliente } from '../js/elements.js'
import { mascaraMoeda, viewMessageAviso } from '../js/utils.js'

function inputInformation(){
    
    if(
        !base || 
        !valorEmprestimo || 
        !prazo ||
        !btnCalc || 
        !resultShow
    ) return; 

    valorEmprestimo.addEventListener('input', mascaraMoeda);

    btnCalc.addEventListener("click", function() {
        const inputSelection = document.querySelector('input[name="tipo-emprestimo"]:checked');
        
        let calculoParcela;

        const valorLimpo = valorEmprestimo.value.replace(/\D/g, "");


        const erroMessage = document.getElementById('erroMessage');
        let sendMessageUser;
        
        // caso nao seja selecionado tipo de emprestimo
        if(!inputSelection){
            sendMessageUser = "Selecione\n Tipo de Empréstimo!\n Pessoal ou Consignado"
            viewMessageAviso(erroMessage, "showError", sendMessageUser);

        } else if(valorLimpo === "") {
            let typeEmp = (inputSelection.value).charAt(0).toUpperCase() + (inputSelection.value).slice(1);
            sendMessageUser = `Informe o Valor para Empréstimo ${typeEmp}`;
            viewMessageAviso(erroMessage, "showError", sendMessageUser);
        
        } else if(prazo.value === "") {
            sendMessageUser = `Informe a Quantidade de Parcelas\n
            No Campo de Prazo (meses)!`;
            viewMessageAviso(erroMessage, "showError", sendMessageUser);

        } else if(
            inputSelection && 
            valorEmprestimo.value != "" && 
            prazo.value != ""
        ) {
            calculoParcela = (Number(valorLimpo)/100) / parseInt(prazo.value)
            document.getElementById('valor-parcela').innerText = calculoParcela.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                
            });

            base.classList.toggle('hidden');
            resultShow.classList.toggle('visible');
            btnCalc.classList.toggle('clicked');
            console.log('Opção escolhida: ' + inputSelection.value)
        
        }else {
            console.log('Deu ERRO na condição')
        }
                    
    })
}

function locationPageCliente(){

    if(!btnNossoCliente) return;

    // acionamento do btn para pagina seja nosso cliente 
    btnNossoCliente.addEventListener('click', () => {
        btnNossoCliente.classList.toggle('clicked')
        setTimeout(() => {
            window.location.href = "../pages/cliente.html";
            btnNossoCliente.classList.toggle('clicked')
        },500)
    })
}

function fagDuvidas(){

    if(!duvidas && !faPlus) return;
  
    duvidas.forEach((duvida, index) => {
    duvida.addEventListener('click', (event) => {
        duvida.classList.toggle('ativa');
        faPlus[index].classList.toggle('rotate');
        
    })
})
}

function pageEmprestimoScripts() {
    // função pra entrada dos dados de simulação
    inputInformation();

    // btn para page seja nosso cliente
    locationPageCliente();

    // elementos do FAG Duvidas
    fagDuvidas();
}

export { pageEmprestimoScripts };