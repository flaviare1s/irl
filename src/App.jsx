import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { Transparencia } from "./pages/Transparencia"
import { Programas } from "./pages/Programas"
import { Footer } from "./components/Footer"

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
          </Routes>
        </main>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
