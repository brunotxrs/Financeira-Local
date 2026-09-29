function utilScroll(myItem) {
    // 1. Pega o botão
    const meuBotao = document.getElementById(myItem);
    if (!meuBotao) return; // Se o botão não existir, para

    // 2. Função que verifica a rolagem
    function verificarRolagem() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 20) {
            // Se rolou mais de 20px: mostra o botão
            meuBotao.style.display = "flex";
        } else {
            // Se está no topo: esconde o botão
            meuBotao.style.display = "none";
        }
    }

    // 3. Adiciona o evento de scroll
    window.addEventListener("scroll", verificarRolagem);

    // 4. Adiciona o evento de clique (voltar ao topo) APENAS UMA VEZ
    meuBotao.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 5. Executa a verificação uma vez no carregamento da página
    verificarRolagem();
}

// Mascara pra Valores Real BR
const mascaraMoeda = (event) => {
    let valor = event.target.value.replace(/\D/g, ""); // Remove tudo que não é dígito
    
    if (!valor) {
        event.target.value = "";
        return;
    }

    // Converte para número dividindo por 100 para considerar os centavos
    const numero = Number(valor) / 100;

    // Formata o número para o padrão de Real brasileiro (BRL)
    event.target.value = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(numero);
}

// função de reaproveitação
function viewMessageAviso(element, classApply,message){
    element.classList.add(classApply);
    element.innerText = message;
    setTimeout(() => {
        element.classList.remove(classApply);
        element.innerText = "";
    },3000);
}

// função para validar as entrada de campos nomes
function iStringValid(paramId){
    
    const inputString = document.getElementById(paramId);

    if(!inputString) return false;

    // Aplica a máscara: só letras, acentos e espaços
    inputString.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');

    })

    return true;

}

// função para validar entrada de email
function iEmailValid(paramId){
    const inputEmail = document.getElementById(paramId);

    if(!inputEmail) return false;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(inputEmail.value);
}

// para aplicar mensagem de erro
function applyErrorMessage(paramElem, paramClass, paramText){

    if(!paramElem) return;

    let timeoutErro = null;

    if(timeoutErro) clearTimeout(timeoutErro); 


    paramElem.classList.add(paramClass);
    paramElem.innerText = paramText;
    
    timeoutErro = setTimeout(() => {
        paramElem.classList.remove(paramClass);
        paramElem.innerText = '';

    }, 2000)
}

// mascara para o telefone
function mascaraTelefone(e) {
  let valor = e.target.value.replace(/\D/g, ""); // Remove tudo que não é dígito
  
  if (valor.length > 11) {
    valor = valor.substring(0, 11); // Limita o tamanho máximo a 11 dígitos
  }

  // Aplica a máscara dependendo do tamanho do número
  if (valor.length > 10) {
    // Celular com 9º dígito: (XX) XXXXX-XXXX
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else if (valor.length > 6) {
    // Fixo ou celular antigo: (XX) XXXX-XXXX (ou em digitação)
    valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  } else if (valor.length > 2) {
    // Apenas com DDD: (XX) XXXX
    valor = valor.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
  } else if (valor.length > 0) {
    // Apenas abrindo parênteses: (XX
    valor = valor.replace(/^(\d*)$/, "($1");
  }

  e.target.value = valor;
}

// aplicando a mascara para telefones
function applyMascaraFone(paramElement){

    if(!paramElement) return false;

    paramElement.addEventListener("input", mascaraTelefone);

    return paramElement.value;

}

// limpando todos os inputs
function clearInputs(paramInput){
    
    if(!paramInput) return false;
    
    return paramInput.value = "";

}

// alternando o checkbox
function alternarCheckbox(paramElement) {

    if(!paramElement) return false;

    // Verifica se está selecionado
    if (paramElement.checked) {
        // Torna ele não selecionado novamente
        paramElement.checked = false;
        return true
    } else {

        return false;
    }
}



export { 
    utilScroll, 
    mascaraMoeda, 
    viewMessageAviso, 
    iStringValid, 
    iEmailValid,
    applyErrorMessage,
    applyMascaraFone,
    clearInputs,
    alternarCheckbox
};