import { describe, it, expect, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useSeo } from "./useSeo";

const head = (sel) => document.head.querySelector(sel);

describe("useSeo", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
    document.title = "";
  });

  it("define title, description e canonical a partir do path", () => {
    renderHook(() =>
      useSeo({ title: "Programas", description: "Nossos programas", path: "/programas" })
    );

    expect(document.title).toBe("Programas");
    expect(head('meta[name="description"]')).toHaveAttribute("content", "Nossos programas");
    expect(head('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.irl.org.br/programas"
    );
  });

  it("marca index por padrão e noindex quando pedido", () => {
    const { unmount } = renderHook(() =>
      useSeo({ title: "A", description: "d", path: "/" })
    );
    expect(head('meta[name="robots"]')).toHaveAttribute("content", "index, follow");
    unmount();

    renderHook(() =>
      useSeo({ title: "B", description: "d", path: "/obrigado", noIndex: true })
    );
    expect(head('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
  });

  // O bug que isso pega: se o hook criasse a tag em vez de atualizar a
  // existente, a página teria duas description e o Google leria a errada.
  it("reaproveita a tag estática do index.html em vez de duplicar", () => {
    const estatica = document.createElement("meta");
    estatica.setAttribute("name", "description");
    estatica.setAttribute("content", "descrição do index.html");
    document.head.appendChild(estatica);

    renderHook(() => useSeo({ title: "A", description: "nova", path: "/" }));

    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(estatica).toHaveAttribute("content", "nova");
  });

  it("atualiza as tags quando a rota muda, sem acumular", () => {
    const { rerender } = renderHook((props) => useSeo(props), {
      initialProps: { title: "Home", description: "d1", path: "/" },
    });

    rerender({ title: "Participe", description: "d2", path: "/participe" });

    expect(document.title).toBe("Participe");
    expect(head('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.irl.org.br/participe"
    );
    expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[name="robots"]')).toHaveLength(1);
  });
});
