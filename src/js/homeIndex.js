import { btnSimulation } from './elements.js'

function btnPageSimulation(){

    if(btnSimulation){
        btnSimulation.addEventListener('click', () => {
            btnSimulation.classList.toggle('clicked');
            setTimeout(() => {
                window.location.href = './src/pages/emprestimos.html';
                btnSimulation.classList.toggle('clicked');
                
            },500)
        })
        
    }

}

function homeIndexScripts(){
    // btn de ação pra pagina de simular emprestimos
    btnPageSimulation();
}

export { homeIndexScripts };
