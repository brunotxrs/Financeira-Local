import { 
    btnCadastrar,  inputNome, 
    inputEmail, inputTelefone, 
    inputCidade, inputTextArea, 
    classErro, checkBoxSouAp } from '../js/elements.js';
import { 
    iStringValid, iEmailValid, 
    applyErrorMessage, applyMascaraFone, 
    clearInputs, alternarCheckbox 
} from '../js/utils.js';

function inputFormCadastrar(){
    if(
        !btnCadastrar ||
        !inputNome ||
        !inputEmail||
        !inputTelefone ||
        !inputCidade ||
        !inputTextArea ||
        !classErro ||
        !checkBoxSouAp
    ) return;

    // aplicando a mascara para apenas letras no campo nome 
    iStringValid('nome');
    iEmailValid('email')
    applyMascaraFone(inputTelefone);
    iStringValid('cidade');

    

    btnCadastrar.addEventListener('click', (e) => {

        e.preventDefault(); // impede o form de recarregar a página

        const inputSelection = document.querySelector('input[name="tipo-emprestimo"]:checked');

        // atribuir elemento de aviso aqui
        if(!inputSelection){
            applyErrorMessage(classErro, 'erro', 'Entrada inválida!\n Selecione o tipo de empréstimo!')
            return;

        } else if(!iStringValid("nome") || inputNome.value === ""){

            applyErrorMessage(classErro, 'erro', 'Entrada inválida!\n informe um nome valido!')

            return;

        } else if(!iEmailValid("email") || inputEmail == ""){
            
            applyErrorMessage(classErro, 'erro', 'Entrada inválida!\n informe um E-mail valido!')
            return;

        } else if(inputTelefone.value === "") {
            applyErrorMessage(classErro, 'erro', 'Entrada inválida!\n Informe o numero de telefone valido')
            return;            
        } else if(!iStringValid('cidade') || inputCidade.value === ""){
            applyErrorMessage(classErro, 'erro', 'Entrada inválida!\n Informe nome da cidade valido')
            return;            
        } else{
            const mens = `Cadastro enviado com sucesso!\n
                Obrigado por confiar na Financeira Local!`
            applyErrorMessage(classErro, 'sucesso', mens)
            clearInputs(inputNome);
            clearInputs(inputEmail);
            clearInputs(inputTelefone);
            clearInputs(inputCidade);
            clearInputs(inputTextArea);
            
            //desmarcando a seleção do tipo de emprestimos 
            const radios = document.querySelectorAll('input[name="tipo-emprestimo"]');
            radios.forEach(radio => {
                radio.checked = false;
            });
            
            alternarCheckbox(checkBoxSouAp);

            return;        
        }
    
    })


}


function pageSejaCliente(){
    inputFormCadastrar();

}

export { pageSejaCliente };