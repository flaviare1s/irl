import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BotaoWhatsapp } from "./components/BotaoWhatsapp";
import { DoacoesContainer } from "./components/DoacoesContainer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";

const rota = (importar, chave) =>
  lazy(() => importar().then((m) => ({ default: m[chave] })));

const Programas = rota(() => import("./pages/Programas"), "Programas");
const Blog = rota(() => import("./pages/Blog"), "Blog");
const Post = rota(() => import("./pages/Post"), "Post");
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
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Post />} />
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
