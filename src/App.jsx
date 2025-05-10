import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { Transparencia } from "./pages/Transparencia"
import { Programas } from "./pages/Programas"
import { Footer } from "./components/Footer"
import { useEffect, useState } from "react"
import { LoadingScreen } from "./components/LoadingScreen"
import { BotaoDoacoesFixed } from "./components/BotaoDoacoesFixed"
import { ScrollToTop } from "./components/ScrollToTop"

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
            </Routes>
          </main>
        <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
