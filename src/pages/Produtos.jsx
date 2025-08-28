import { produtosMock } from "../data/mockData";
import {FiFilter, FiSearch, FiArrowDownUp} from 'react-icons/fi';

const EtiquetaStatus = ({estoque, estoqueMinimo})=>{
    let textoStatus, corFundo, corTexto;
    
    if(estoque===0){
        textoStatus = 'Em falta';
        corFundo ='bg-red-100';
        corTexto = 'text-red-700';

    }else if(estoque<estoqueMinimo){
        textoStatus = 'Estoque baixo';
        corFundo = 'bg-yellow-100';
        corTexto = 'text-yellow-700';

    }else{
        textoStatus = 'Normal';
        corFundo = 'bg-green-100';
        corTexto = 'text-green-700';
    }

    return(
        <span className={`px-3 py-1 text-xs font medium rounded-full ${co}`}></span>
    )

}