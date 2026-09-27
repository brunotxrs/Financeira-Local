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


export { utilScroll, mascaraMoeda, viewMessageAviso };