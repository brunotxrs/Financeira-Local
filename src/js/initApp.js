import { homeIndexScripts } from '../js/homeIndex.js'
import { pageEmprestimoScripts } from '../js/pageEmprestimo.js'


import { utilScroll } from '../js/utils.js';


export function initApp(){
    // Scripts da pagina Home
    homeIndexScripts();

    // Scripts da pagina Simular Emprestimos
    pageEmprestimoScripts()


    // btn de rolagem
    utilScroll("btnTopo");
}