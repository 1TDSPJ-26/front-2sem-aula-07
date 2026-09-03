import { Outlet } from 'react-router'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
function App() {
 return (
 <div className="min-h-screen bg-slate-950 text-slate-100">
 <Cabecalho />
 <main className="mx-auto min-h-[76vh] max-w-5xl px-4 sm:px-6">
 <Outlet />
 </main>
 <Rodape />
 </div>
 )
}
export default App