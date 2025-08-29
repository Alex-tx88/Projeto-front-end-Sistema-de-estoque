import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import PaginaDashboard from './pages/Dashboard'
import PaginaProduto from './pages/Produtos'
import PaginaMovimentacao from './pages/Movimentacao'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PaginaDashboard />} />
        <Route path="produtos" element={<PaginaProduto />} />
        <Route path="movimentacao" element={<PaginaMovimentacao />} />
      </Route>
    </Routes>
  )
}

export default App


