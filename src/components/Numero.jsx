import { useState, useEffect } from "react";

export const Numero = ({ textColor, numero, descricao }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Number(numero);
    const duration = 2000;
    const incrementTime = 10;
    const step = (end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [numero]);

  // Formatação com ponto como separador de milhar
  const formattedCount = count.toLocaleString('en-US').replace(/,/g, '.');

  return (
    <div>
      <p className={`${textColor} text-6xl md:text-7xl font-bold text-center`}>
        {formattedCount}
      </p>
      <p className="text-sm text-center">{descricao}</p>
    </div>
  );
};
