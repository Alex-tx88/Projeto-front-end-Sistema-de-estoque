// src/data/mockData.js

// Usamos "Mock" no nome para deixar claro que são dados de teste.
export const produtosMock = [
  {
    id: 1,
    nome: 'Notebook Dell Inspiron',
    categoria: 'Eletrônicos',
    estoque: 15,
    estoqueMinimo: 10,
    preco: 2500.00,
  },
  {
    id: 2,
    nome: 'Mouse Logitech MX',
    categoria: 'Periféricos',
    estoque: 5,
    estoqueMinimo: 15,
    preco: 250.00,
  },
  // ... resto dos produtos
];

export const movimentacoesMock = [
  {
    id: 1,
    data: '26/08/2025',
    nomeProduto: 'Notebook Dell Inspiron',
    tipo: 'Entrada', // Mantemos "Entrada" e "Saída" como valores, pois representam dados
    quantidade: 5,
    motivo: 'Compra',
  },
  {
    id: 2,
    data: '25/08/2025',
    nomeProduto: 'Mouse Logitech MX',
    tipo: 'Saída',
    quantidade: 2,
    motivo: 'Venda',
  },
  // ... resto das movimentações
];