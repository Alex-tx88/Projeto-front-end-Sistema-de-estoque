import {NavLink} from 'react-router-dom'

export default function BarraNavegacao(){

  const definirEstiloLink = ({isActive}) =>{
    const classeBase="px4-4 py-2 rounded-md text-sm font-medium transition-colors"
    const classeAticvo = "bg-brand-teal text-white";
    const classeInativo="text-gray-700 hover:bg-teal-100";

return `${classeBase} ${isActive ? classeAticvo:classeInativo}`;

  };

  return(
    <header className="bg-white shadow- sm sticky top-0 z-10">
        <nav className="container mx auto px-4 py-3 flex items-center justify between">
            <h1 className="text-xl font-bolf text-brand-teal">SuperEstoque</h1>
            <ul className="flex items-center space-x-4">
                <li>
                    <NavLink to="/" className={definirEstiloLink}>Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/produtos" className={definirEstiloLink}>Produtos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movimentacao" className={definirEstiloLink}>Movimentação</NavLink>
                </li>
            </ul>

        </nav>
    
    </header>

  );
}