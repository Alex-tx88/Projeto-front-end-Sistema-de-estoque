import { produtosMock } from '../data/mockData';
import { FiBox, FiDollarSign, FiAlertTriangle, FiTrendingDown } from 'react-icons/fi';

const CardEstatistica = ({ icone, titulo, valor, variacao, tipoVariacao }) => {
  const corVariacao = tipoVariacao === 'positivo' ? 'text-green-500' : 'text-red-500';
  const iconeVariacao = tipoVariacao === 'positivo' ? '↗' : '↘';

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <h3 className="text-gray-500">{titulo}</h3>
        <div className="text-gray-400">{icone}</div>
      </div>
      <p className="text-3xl font-bold text-gray-800 mt-2">{valor}</p>
      <p className={`text-sm mt-1 ${corVariacao}`}>
        {iconeVariacao} {variacao}
      </p>
    </div>
  );
};

export default function PaginaDashboard() { 
  const valorTotalEstoque = produtosMock.reduce((acumulador, produto) => acumulador + (produto.preco * produto.estoque), 0);
  
  const produtosEmFalta = produtosMock.filter(produto => produto.estoque === 0).length;
  const produtosEstoqueBaixo = produtosMock.filter(p => p.estoque > 0 && p.estoque < p.estoqueMinimo).length;

  return (
    <div className="space-y-8">
      {/* ... (código do cabeçalho da página) ... */}
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardEstatistica
          icone={<FiBox size={24} />}
          titulo="Total de Produtos"
          valor={produtosMock.length}
          variacao="+12% vs mês anterior"
          tipoVariacao="positivo"
        />
        <CardEstatistica
          icone={<FiDollarSign size={24} />}
          titulo="Valor do Estoque"
          valor={valorTotalEstoque.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          variacao="+8% vs mês anterior"
          tipoVariacao="positivo"
        />
        <CardEstatistica
          icone={<FiAlertTriangle size={24} />}
          titulo="Produtos em Falta"
          valor={produtosEmFalta}
          variacao="-2 vs mês anterior"
          tipoVariacao="negativo"
        />
        <CardEstatistica
          icone={<FiTrendingDown size={24} />}
          titulo="Estoque Baixo"
          valor={produtosEstoqueBaixo}
          variacao="+3 vs mês anterior"
          tipoVariacao="negativo"
        />
      </section>
      
      {/* ... (código da lista de inventário, similar à página de produtos) ... */}
    </div>
  );
}
