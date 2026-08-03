import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Sem globals:true no vitest, o cleanup automático do Testing Library não
// roda sozinho — daí o registro explícito.
afterEach(cleanup);

// ModalDoacoesMobile e ModalDocumentos chamam Modal.setAppElement('#root')
// no escopo do módulo. Sem esse nó o react-modal lança já no import.
const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);
