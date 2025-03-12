import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { Transparencia } from "./pages/Transparencia"
import { FacaParte } from "./pages/FacaParte"

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/doacoes" element={<FacaParte />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
