import { BotaoDoacoes } from "./BotaoDoacoes";
import { Depoimento } from "./Depoimento";

import pattern from "../assets/img/elementos/elemento-azul1.png";
import jarina from "../assets/img/fotos/jarina.jpg";
import clesia from "../assets/img/fotos/clesia.jpg";



export const Depoimentos = () => {
  return (
    <div className="bg-living-coral flex flex-col justify-center items-center py-10 px-4 md:px-10 lg:pl-20 xl:pl-[200px]">
      <div className="flex justify-center items-center gap-3 mb-10">
        <img className="w-10" src={pattern} />
        <h2 className="text-white text-3xl md:text-5xl text-center font-bold">
          O que dizem sobre nós
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
          <Depoimento depoimento='"Aprendi a trabalhar em grupo e que ninguém faz nada só. Conheci o Grupo de Mulheres Francisca Clotilde através de uma amiga, e foi uma das melhores coisas que aconteceu na minha vida, pois estava passando por momentos difíceis e depressivos. Só tenho a agradecer ao IRL e ao grupo de mulheres."' nome='Maria Horteneuza de Oliveira Rodrigues' foto={jarina} relacao='Grupo de Muheres Francisca Clotilde' />
          <Depoimento depoimento='"Contribuo de forma voluntária no IRL desde 2015. Inicialmente prestei serviço de automação do abastecimento de água da sede, projetando e instalando o sistema. Continuo sempre visitando o IRL e me voluntariando para resolver problemas referentes à infraestrutura. Nesse tempo de trabalho voluntário, um dos aprendizados que tive foi perceber como é importante fazer algo para ajudar a melhorar a vida dos outros."' nome='Clausson Sales do Nascimento Rios' foto={clesia} relacao='Voluntário' />
          <Depoimento depoimento='"Sempre fui fã do trabalho desenvolvido pelo IRL , mas me envolvi de forma mais ativa no início da pandemia, quando eu e minha rede de apoio conseguimos um bom volume de doações.  Eu admiro muito o IRL pelo lindo trabalho que eles desenvolvem com as crianças, sempre com cuidado e amor, não só pelas crianças, mas também pelas famílias. Isso também serve de inspiração para mim como mãe, na criação dos meus filhos, pois quero que sejam homens bons e que sempre olhem para o próximo também com cuidado."' nome='Neuza Cysne Queiroz Ferreira Gomes' foto={jarina} relacao='Parceira' />
          <Depoimento depoimento='"Estou há quatro anos no IRL e gosto de tudo, principalmente de capoeira, que aprendi nos projetos de lá."' nome='Carlos Adrian da Silva Melo' foto={clesia} relacao='Criança /Adolescente' />
          <Depoimento depoimento='"Fiz parte do IRL por bastante tempo, cheguei lá quando tinha 8 anos. Eu amava participar de todas as atividades e tive vários aprendizados. Um que me marcou bastante foi um teatro que fizemos [em 2021] ]sobre as diferenças, nossa sexualidade e nossas escolhas."' nome='Fernanda Emilly Pastor de Oliveira' foto={jarina} relacao='Criança /Adolescente' />
          <Depoimento depoimento='"Iniciei meu trabalho voluntário no IRL na época da faculdade, e foi paixão à primeira vista. Gostei muito da forma como toda a equipe trabalha, com amor, dedicação e comprometimento. Especialmente com um projeto que conduzi [no IRL], meu maior aprendizado tem sido, de fato, perceber como é possível construir mudanças, estabelecer vínculos com as pessoas, e ver que, nessa construção, você também se constrói"' nome='Raquel Beviláqua' foto={clesia} relacao='Voluntária' />
        </div>
        <div className="mt-10">
          <BotaoDoacoes bgColor="bg-greenery" />
        </div>
      </div>
    </div>
  );
};
