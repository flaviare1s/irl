import pattern from "../assets/img/elementos/elemento-roxo1.png";
import { BotaoDoacoes } from "./BotaoDoacoes";
import { Numero } from "./Numero";

export const Numeros = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 md:px-10 bg-gray-50">
      <div className="flex justify-center items-center gap-1 sm:gap-3 mb-10">
        <img className="w-10" src={pattern} />
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-center font-bold">
          Números de impacto positivo (2024)
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 md:pr-[200px] gap-8 lg:min-h-[400px]">
          <Numero textColor="text-primary" numero='93' descricao='Crianças e adolescentes atendidos com idades entre 6 e 15 anos' />
          <Numero textColor="text-freesia" numero='68' descricao='Famílias diretamente beneficiadas' />
          <Numero textColor="text-greenery" numero='1144' descricao='Aulas de educação social e educação formal' />
          <Numero textColor="text-living-coral" numero='1119' descricao='Aulas de arte-educação' />
          <Numero textColor="text-radiant-orchid" numero='254' descricao='Atividades agroflorestais' />
          <Numero textColor="text-primary" numero='42' descricao='Encontros formativos do Grupo de Mulheres Francisca Clotilde' />
        </div>
        <div className="mt-10">
          <BotaoDoacoes />
        </div>
      </div>
    </div>
  );
};
