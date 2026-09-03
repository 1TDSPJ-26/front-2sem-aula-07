import { Outlet } from 'react-router'
import Cabecalho from './components/Cabecalho/index.tsx'
import Rodape from './components/Rodape/index.tsx'

export default function App() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  )
}