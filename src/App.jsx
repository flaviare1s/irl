import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { Transparencia } from "./pages/Transparencia"
import { Doacoes } from "./pages/Doacoes"
import { Programas } from "./pages/Programas"

function App() {

  return (
    <div className="font-nunito">
      <BrowserRouter>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programas" element={<Programas />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/doacoes" element={<Doacoes />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
