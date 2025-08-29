import { movimentacoesMock, produtosMock } from '../data/mockData';
import { FiTrendingUp, FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react'; 


const EtiquetaTipo = ({ tipo }) => {
  const ehEntrada = tipo === 'Entrada';
  const estilo = ehEntrada 
    ? 'bg-green-100 text-green-700' 
    : 'bg-red-100 text-red-700';
  
  return <span className={`px-3 py-1 text-xs font-medium rounded-full ${estilo}`}>{tipo}</span>;
}

export default function PaginaMovimentacao() { 
  const [tipoMovimentacao, setTipoMovimentacao] = useState('entrada');

  return (
    <div className="space-y-6">
      {/* ... (código do cabeçalho) ... */}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna do Formulário */}
        <section className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Nova Movimentação</h2>
          <form className="space-y-4">
            {/* ... (código do select de produtos) ... */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Tipo</label>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  type="button"
                  onClick={() => setTipoMovimentacao('entrada')}
                  className={`p-2 rounded-lg font-medium transition-colors ${
                    tipoMovimentacao === 'entrada' ? 'bg-brand-teal text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Entrada
                </button>
                <button
                  type="button"
                  onClick={() => setTipoMovimentacao('saida')}
                  className={`p-2 rounded-lg font-medium transition-colors ${
                    tipoMovimentacao === 'saida' ? 'bg-brand-teal text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Saída
                </button>
              </div>
            </div>
            {/* ... (resto do formulário) ... */}
          </form>
        </section>

        {/* Coluna do Histórico */}
        <section className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          {/* ... (cabeçalho do histórico) ... */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              {/* ... (cabeçalho da tabela) ... */}
              <tbody>
                {movimentacoesMock.map((mov) => (
                  <tr key={mov.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 text-gray-600">{mov.data}</td>
                    <td className="p-4 font-medium text-gray-800">{mov.nomeProduto}</td>
                    <td className="p-4"><EtiquetaTipo tipo={mov.tipo} /></td>
                    <td className={`p-4 font-medium ${mov.tipo === 'Entrada' ? 'text-green-600' : 'text-red-600'}`}>
                      {mov.tipo === 'Entrada' ? `+${mov.quantidade}` : `-${mov.quantidade}`}
                    </td>
                    <td className="p-4 text-gray-600">{mov.motivo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}