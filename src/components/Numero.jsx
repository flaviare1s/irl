import { useState, useEffect } from "react";
import { useRevelar } from "../hooks/useRevelar";

export const Numero = ({ textColor, numero, descricao }) => {
  const [count, setCount] = useState(0);
  const revelar = useRevelar();

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

  const formattedCount = count.toLocaleString('en-US').replace(/,/g, '.');

  return (
    <div ref={revelar.ref} className={revelar.className}>
      <p className={`${textColor} text-5xl md:text-7xl font-bold text-center`}>
        {formattedCount}
      </p>
      <p className="text-sm text-center">{descricao}</p>
    </div>
  );
};
