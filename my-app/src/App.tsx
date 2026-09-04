import { Outlet } from 'react-router'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Lampada from './components/Lampada'

export default function App() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Rodape />
      <Lampada />
    </>
  )
}
