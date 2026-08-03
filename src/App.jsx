import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BotaoWhatsapp } from "./components/BotaoWhatsapp";
import { DoacoesContainer } from "./components/DoacoesContainer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";
// Home fica estática de propósito: é a landing page e contém o elemento do
// LCP. Deixá-la em lazy criava uma cascata (bundle -> chunk da Home -> banner)
// que atrasava o LCP em ~2s. O swiper, que era o peso dela, saiu para o chunk
// de Depoimentos (ver Home.jsx).
import { Home } from "./pages/Home";

// As demais rotas viram chunks próprios: quem abre /participe não baixa o
// código das outras páginas. Elas usam export nomeado, daí o .then.
const rota = (importar, chave) =>
  lazy(() => importar().then((m) => ({ default: m[chave] })));

const Programas = rota(() => import("./pages/Programas"), "Programas");
const Transparencia = rota(() => import("./pages/Transparencia"), "Transparencia");
const FacaParte = rota(() => import("./pages/FacaParte"), "FacaParte");
const Obrigado = rota(() => import("./pages/Obrigado"), "Obrigado");
const NotFound = rota(() => import("./pages/NotFound"), "NotFound");

function App() {
  return (
    <div className="font-nunito">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <DoacoesContainer />
        <main className="min-h-screen">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programas" element={<Programas />} />
              <Route path="/transparencia" element={<Transparencia />} />
              <Route path="/participe" element={<FacaParte />} />
              <Route path="/obrigado" element={<Obrigado />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BotaoWhatsapp />
      </BrowserRouter>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
