import { useEffect } from "react";

const SITE = "https://www.irl.org.br";

const setTag = (selector, tag, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.head.appendChild(document.createElement(tag));
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
};

export const useSeo = ({ title, description, path, noIndex = false }) => {
  useEffect(() => {
    document.title = title;
    setTag('meta[name="description"]', "meta", {
      name: "description",
      content: description,
    });
    setTag('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: SITE + path,
    });
    setTag('meta[name="robots"]', "meta", {
      name: "robots",
      content: noIndex ? "noindex, follow" : "index, follow",
    });
  }, [title, description, path, noIndex]);
};
