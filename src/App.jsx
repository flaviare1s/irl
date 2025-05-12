import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { Transparencia } from "./pages/Transparencia"
import { Programas } from "./pages/Programas"
import { FacaParte } from "./pages/FacaParte"
import { Footer } from "./components/Footer"
import { useEffect, useState } from "react"
import { LoadingScreen } from "./components/LoadingScreen"
import { BotaoDoacoesFixed } from "./components/BotaoDoacoesFixed"
import { ScrollToTop } from "./components/ScrollToTop"
import { Obrigado } from "./pages/Obrigado"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "react-hot-toast"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-nunito">
      {isLoading && <LoadingScreen />}
      <div className={isLoading ? "opacity-0" : "opacity-100"}>
        <BrowserRouter>
        <ScrollToTop />
        <Header />
        <BotaoDoacoesFixed />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programas" element={<Programas />} />
              <Route path="/transparencia" element={<Transparencia />} />
              <Route path="/participe" element={<FacaParte />} />
              <Route path="/obrigado" element={<Obrigado />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        <Footer />
        </BrowserRouter>
      </div>
      <Toaster position="top-center" />
    </div>
  )
}

export default App
