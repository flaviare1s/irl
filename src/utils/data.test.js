import { describe, it, expect } from "vitest";
import { formatarData } from "./data";

describe("formatarData", () => {
  it("escreve a data por extenso em português", () => {
    expect(formatarData("2026-03-10T12:00:00.000Z")).toBe("10 de março de 2026");
  });

  // Post ainda em rascunho vem com publishedAt null: a data some da tela em
  // vez de virar "Invalid Date".
  it.each([null, undefined, ""])("devolve vazio para %s", (valor) => {
    expect(formatarData(valor)).toBe("");
  });

  it("devolve vazio quando a data não é válida", () => {
    expect(formatarData("nem-data-e")).toBe("");
  });
});
