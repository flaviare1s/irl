import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BotaoWhatsapp } from "./components/BotaoWhatsapp";
import { DoacoesContainer } from "./components/DoacoesContainer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";
import { FacaParte } from "./pages/FacaParte";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Obrigado } from "./pages/Obrigado";
import { Programas } from "./pages/Programas";
import { Transparencia } from "./pages/Transparencia";

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
          <DoacoesContainer />
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
          <BotaoWhatsapp />
        </BrowserRouter>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
