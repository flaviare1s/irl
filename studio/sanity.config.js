import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { post } from "./schemas/post";

// projectId literal pelo mesmo motivo do sanity.cli.js: é público e o .env
// não está versionado, então quem clonar o repo teria um painel quebrado.
export default defineConfig({
  name: "irl",
  title: "Blog do Instituto Dr. Rocha Lima",

  projectId: "mhsp9d5r",
  dataset: "production",

  plugins: [structureTool()],

  schema: { types: [post] },
});
