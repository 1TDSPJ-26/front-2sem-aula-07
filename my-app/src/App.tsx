import { Outlet } from "react-router"
import Rodape from "./components/rodape"
import Menu from "./components/menu"


export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Menu/>

      <main className="mx-auto min-h-[76vh] max-w-5xl px-4 sm:px-6">
        <Outlet/>
      </main>

      <Rodape/>
    </div>
  )
}
