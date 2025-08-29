import { produtosMock } from "../data/mockData.js";
import { FiFilter, FiSearch, FiRepeat } from 'react-icons/fi'; // Ícone atualizado

const EtiquetaStatus = ({ estoque, estoqueMinimo }) => {
  let textoStatus, corFundo, corTexto;

  if (estoque === 0) {
    textoStatus = 'Em Falta';
    corFundo = 'bg-red-100';
    corTexto = 'text-red-700';
  } else if (estoque < estoqueMinimo) {
    textoStatus = 'Estoque Baixo';
    corFundo = 'bg-yellow-100';
    corTexto = 'text-yellow-700';
  } else {
    textoStatus = 'Normal';
    corFundo = 'bg-green-100';
    corTexto = 'text-green-700';
  }

  // Corrigido: Adicionado espaço antes das variáveis e removido '}' extra no final.
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${corFundo} ${corTexto}`}>
      {textoStatus}
    </span>
  );
};

export default function PaginaProdutos() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Lista de Produtos</h1>
          <p className="text-gray-500">Gerencie todos os produtos do seu estoque</p>
        </div>
        <button className="bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors">
          + Adicionar Produto
        </button>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        {/* Aqui você pode adicionar a barra de busca e os filtros no futuro */}
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="p-4 font-semibold text-gray-600">Produto</th>
                <th className="p-4 font-semibold text-gray-600">Estoque Atual</th>
                <th className="p-4 font-semibold text-gray-600">Preço</th>
                <th className="p-4 font-semibold text-gray-600">Status</th>
                <th className="p-4 font-semibold text-gray-600">Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtosMock.map((produto) => (
                <tr key={produto.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-medium text-gray-800">{produto.nome}</div>
                    <div className="text-sm text-gray-500">{produto.categoria}</div>
                  </td>
                  <td className="p-4 text-gray-600">{produto.estoque}</td>
                  <td className="p-4 text-gray-600">
                    {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </td>
                  <td className="p-4">
                    <EtiquetaStatus estoque={produto.estoque} estoqueMinimo={produto.estoqueMinimo} />
                  </td>
                  <td className="p-4 text-gray-600 font-bold cursor-pointer">...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
