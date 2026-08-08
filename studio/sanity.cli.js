import { defineCliConfig } from "sanity/cli";

// O projectId fica literal de propósito. Ele NÃO é segredo: aparece na URL
// pública da API e no bundle do site. Além disso o CLI avalia este arquivo
// antes de carregar o .env, então process.env aqui vem vazio.
export default defineCliConfig({
  api: {
    projectId: "mhsp9d5r",
    dataset: "production",
  },
});
