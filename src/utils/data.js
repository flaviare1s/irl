export const formatarData = (iso) => {
  if (!iso) return "";

  const data = new Date(iso);
  if (Number.isNaN(data.getTime())) return "";

  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
