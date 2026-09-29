import { homeIndexScripts } from '../js/homeIndex.js';
import { pageEmprestimoScripts } from '../js/pageEmprestimo.js';
import { pageSejaCliente } from '../js/sejaCliente.js';


import { utilScroll } from '../js/utils.js';


export function initApp(){
    // Scripts da pagina Home
    homeIndexScripts();

    // Scripts da pagina Simular Emprestimos
    pageEmprestimoScripts();

    // Scripts da pagina Seja nosso Cliente
    pageSejaCliente();

    // btn de rolagem
    utilScroll("btnTopo");
}