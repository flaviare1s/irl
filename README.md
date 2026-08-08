# Site do Instituto Dr. Rocha Lima

_Leia em outros idiomas: [English](README.en.md)_

![Testes](https://img.shields.io/badge/testes-184%20passando-brightgreen)
![Cobertura](https://img.shields.io/badge/cobertura-100%25-brightgreen)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Vite](https://img.shields.io/badge/Vite-6-646CFF)

## 📋 Sobre o Projeto

Site institucional do **Instituto Dr. Rocha Lima de Proteção e Assistência à Infância**, uma organização sem fins lucrativos dedicada à proteção e assistência de crianças e adolescentes em situação de vulnerabilidade social.

Este projeto foi desenvolvido com React e Vite, oferecendo uma experiência moderna e responsiva para apresentar os programas sociais, equipe, missão e formas de contribuir com o instituto.

Projeto desenvolvido para o PEX I e aprimorado no PEX V (Projetos de Extensão do curso de ADS da Faculdade Descomplica).

## 🚀 Tecnologias Utilizadas

**Aplicação**

- **React** 19 — Biblioteca para construção de interfaces
- **Vite** 6 — Build tool e servidor de desenvolvimento
- **React Router DOM** 7 — Navegação entre páginas, com divisão de código por rota
- **Tailwind CSS** 4 — Framework CSS utilitário
- **Swiper** — Carrosséis de depoimentos e documentos
- **React Hook Form** — Formulário de contato com validação
- **EmailJS** — Envio do formulário sem backend
- **React Hot Toast** — Notificações
- **React Modal** — Modais acessíveis
- **React Icons** — Ícones
- **@fontsource-variable/nunito** — Fonte Nunito auto-hospedada
- **Sanity** — CMS do blog, consultado pela API pública de leitura

**Testes**

- **Vitest** 4 — Test runner (compartilha a config do Vite)
- **Testing Library** (`react`, `user-event`, `jest-dom`) — Testes pela perspectiva do usuário
- **jsdom** — Ambiente de DOM
- **@vitest/coverage-v8** — Relatório de cobertura

**Ferramentas de build**

- **sharp** — Conversão e redimensionamento das imagens para WebP
- **ESLint** 9 — Análise estática

## 📁 Estrutura do Projeto

```
irl/
├── public/                  # Servido como está (robots.txt, sitemap.xml, banner do LCP)
├── scripts/
│   └── images-to-webp.js    # Converte src/assets para WebP (npm run images)
├── studio/                  # Painel de edição do blog (app Sanity separado)
├── src/
│   ├── api/
│   │   └── cms.js           # Única parte que conhece o Sanity
│   ├── assets/              # Imagens (.webp) e vídeo
│   │   ├── img/
│   │   │   ├── documentos/  # Certidões e certificados
│   │   │   ├── elementos/   # Grafismos decorativos
│   │   │   ├── fotos/
│   │   │   ├── ods/
│   │   │   └── parceiros/
│   │   └── videos/
│   ├── components/          # 35 componentes + seus testes
│   ├── hooks/
│   │   ├── useSeo.js        # Title, description e canonical por rota
│   │   └── useRevelar.js    # Revelação das seções ao rolar
│   ├── pages/               # Uma por rota
│   ├── utils/
│   ├── test/
│   │   └── setup.js         # Setup global do Vitest
│   ├── App.jsx              # Shell e rotas
│   ├── main.jsx             # Ponto de entrada
│   └── index.css            # Tema do Tailwind e animações
├── vercel.json              # Rewrites de SPA e redirect /admin
├── vite.config.js           # Config do Vite + Vitest + cobertura
└── package.json
```

### Rotas

| Rota | Página | Observação |
| --- | --- | --- |
| `/` | Home | Carregada de forma estática (contém o elemento do LCP) |
| `/programas` | Programas | Âncoras por programa, acessíveis pelos cards da home |
| `/transparencia` | Transparência | Certificados e números de impacto |
| `/participe` | Faça parte | Formulário de contato e dados para doação |
| `/blog` | Blog | Lista os posts publicados no Sanity |
| `/blog/:slug` | Post | Conteúdo de um post; `noindex` se o slug não existir |
| `/obrigado` | Confirmação de envio | `noindex` |
| `*` | 404 | `noindex` |

## 🎯 Funcionalidades

- ✨ **Interface Responsiva** — Design adaptável para desktop, tablet e mobile
- 📱 **Menu Mobile** — Navegação otimizada para dispositivos móveis, com indicação da rota atual
- 🎠 **Carrosséis Interativos** — Depoimentos e documentos
- 📝 **Formulário de Contato** — Integração com EmailJS e validação de campos
- 💰 **Sistema de Doações** — Bandeja de PIX com QR code e dados bancários
- 📄 **Área de Transparência** — Certidões e certificados em modal
- 🎯 **ODS** — Alinhamento com os Objetivos de Desenvolvimento Sustentável
- 📊 **Números do Instituto** — Contadores animados
- ♿ **Acessibilidade** — Navegação por teclado, nomes acessíveis em todos os controles e respeito a `prefers-reduced-motion`
- 🔍 **SEO** — Metatags Open Graph, dados estruturados, `sitemap.xml`, `robots.txt` e title/canonical por rota
- ⚡ **Performance** — Imagens em WebP, divisão de código por rota, fonte auto-hospedada e lazy loading

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18 ou superior (o Vite 6 não suporta versões anteriores)
- npm

### Passos para Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/flaviare1s/irl.git
   cd irl
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto:

   ```env
   VITE_EMAILJS_SERVICE_ID=seu_service_id
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id
   VITE_EMAILJS_USER_ID=sua_public_key

   # Sanity (ver a seção Blog)
   VITE_SANITY_PROJECT_ID=seu_project_id
   VITE_SANITY_DATASET=production
   ```

   Há um modelo pronto em [`.env.example`](.env.example).

   > O EmailJS chama esse valor de _Public Key_ no painel, mas o código o lê
   > como `VITE_EMAILJS_USER_ID`. Sem essas três variáveis o formulário de
   > contato falha no envio.

4. **Execute o projeto em modo desenvolvimento**

   ```bash
   npm run dev
   ```

   O site estará disponível em `http://localhost:5173`

5. **Build para produção**

   ```bash
   npm run build
   ```

6. **Preview do build de produção**

   ```bash
   npm run preview
   ```

   Disponível em `http://localhost:4173`.

   > Para auditar performance (Lighthouse, PageSpeed), use **sempre** o
   > preview, nunca o `npm run dev`. Em desenvolvimento o Vite serve cada
   > módulo separadamente e sem minificar, o que derruba a pontuação sem
   > relação com o site publicado.

## 🧪 Testes

A suíte usa **Vitest** com **Testing Library**, consultando a tela como o
usuário faria (papéis e nomes acessíveis) em vez de classes CSS ou estrutura
interna.

```bash
npm test              # roda a suíte uma vez
npm run test:watch    # re-roda ao salvar
npm run test:coverage # gera o relatório de cobertura
```

### Cobertura

| Métrica | Cobertura |
| --- | --- |
| Statements | 100% (380/380) |
| Branches | 94,9% (186/196) |
| Functions | 100% (126/126) |
| Lines | 100% (348/348) |

`npm run test:coverage` grava um relatório navegável em `coverage/index.html`,
com detalhamento linha a linha por arquivo. A pasta é ignorada pelo Git.

A configuração usa `include: ['src/**/*.{js,jsx}']` de propósito: assim os
arquivos **sem nenhum teste** também entram na conta. Sem isso o V8 mediria
apenas o que algum teste importou, e o número sairia inflado.

### O que os testes cobrem

- **Comportamento, não aparência** — o que o componente faz, não como está estilizado
- **Fluxos que cruzam componentes** — por exemplo, o botão "+" de um card da home navega para `/programas` e a página rola até aquele programa
- **Formulário de contato** — validação dos campos, payload enviado ao EmailJS e o caso de falha, em que o usuário não pode ser levado à página de agradecimento
- **Acessibilidade** — nomes acessíveis dos controles, `aria-current` na rota atual, `aria-expanded` nos menus e bandejas, e `inert` no que está fechado
- **Decisões de performance** — só a imagem do LCP recebe `fetchpriority="high"`, todas as outras entram em `loading="lazy"`

### Escrevendo novos testes

Arquivos ficam ao lado do código, como `Componente.test.jsx`. O
[`src/test/setup.js`](src/test/setup.js) roda antes de tudo e cuida de dois
detalhes:

- registra o `cleanup` da Testing Library entre os testes;
- injeta uma `<div id="root">` no documento, porque `react-modal` chama
  `Modal.setAppElement('#root')` no escopo do módulo e lança erro sem esse nó.

## 📰 Blog (Sanity)

O blog lê os posts de um **Sanity** externo, para que a equipe do Instituto
publique conteúdo sem precisar de desenvolvedor. O site consome apenas a API
pública de leitura — **nenhum token vai para o frontend**, porque token em
código de navegador é público na prática.

O repositório tem duas partes:

- **o site** (esta pasta), que só lê;
- **[`studio/`](studio/)**, o painel onde a equipe escreve. É um app separado,
  hospedado de graça pelo Sanity, e não entra no bundle do site.

### 1. Pegar o Project ID

Em [sanity.io/manage](https://sanity.io/manage), abra o projeto e copie o
**Project ID**. Ele não é segredo: aparece na URL pública da API.

### 2. Publicar o painel de edição

```bash
cd studio
npm install
npx sanity login
npx sanity deploy
```

O `deploy` pergunta um nome e devolve o endereço do painel
(`https://seu-nome.sanity.studio`). É esse link que vai para a equipe do
Instituto — quem for publicar precisa ser convidado em **Members**, no
sanity.io/manage.

O Project ID fica literal em `studio/sanity.cli.js` e `studio/sanity.config.js`.
Isso é proposital: ele **não é segredo** (aparece na URL pública da API), o CLI
avalia esses arquivos antes de carregar qualquer `.env`, e `.env` não é
versionado — então deixá-lo lá quebraria o painel para quem clonasse o repo.
Para apontar para outro projeto, troque o valor nos dois arquivos.

### 3. Liberar a leitura pública e o domínio do site

Em **sanity.io/manage → API**:

- **Dataset**: `production` precisa estar como **Public**. Sem isso a API
  responde 401 e o site mostra o aviso de indisponibilidade.
- **CORS origins**: adicione `https://www.irl.org.br` e, para desenvolver,
  `http://localhost:5173`. Deixe *Allow credentials* **desmarcado** — a leitura
  é anônima e não precisa disso.

Não crie token de API para o site. Ele lê como visitante anônimo, e é isso que
mantém o frontend sem segredo nenhum.

### 4. Apontar o site para o projeto

```env
VITE_SANITY_PROJECT_ID=seu_project_id
VITE_SANITY_DATASET=production
```

Em produção, cadastre as mesmas variáveis no painel do Vercel.

### 5. Publicar um post

No painel, **Post do blog → Create**. Os campos:

| Campo | Para que serve |
| --- | --- |
| Título | Título do post e da aba do navegador |
| Endereço da página | Gerado do título; é a URL (`/blog/meu-post`) |
| Data de publicação | Ordena a listagem, do mais recente para o mais antigo |
| Resumo | Texto do cartão na listagem e a descrição no Google |
| Imagem de capa | Aparece no cartão e no topo do post |
| Autor | Opcional |
| Conteúdo | Corpo do post |

A **descrição da imagem** é obrigatória de propósito: é ela que o leitor de
tela lê. O editor de conteúdo não oferece "Título 1" porque o título do post já
é o `h1` da página — um segundo `h1` no corpo quebraria a hierarquia.

Clique em **Publish**. Salvar sem publicar deixa como rascunho, e rascunho não
aparece no site.

### Como o site se comporta sem o Sanity

O blog nunca derruba o site. Se as variáveis não estiverem configuradas, se o
Sanity estiver fora do ar ou se ainda não houver posts, a página mostra um
recado explicando a situação e o resto do site segue normal.

## 🖼️ Imagens

As imagens de `src/assets` são versionadas já em WebP. Para converter novas:

```bash
npm run images
```

O script [`scripts/images-to-webp.js`](scripts/images-to-webp.js) processa
apenas as imagens realmente importadas no código, redimensiona cada uma pelo
tamanho em que ela aparece na tela (com 2x para telas retina), reescreve os
`import` e remove o arquivo original. Imagens não utilizadas são listadas ao
final e mantidas intactas.

## 🌐 Deploy

O projeto está configurado para deploy no Vercel através do arquivo `vercel.json`.

Para fazer deploy:

1. Instale o Vercel CLI

   ```bash
   npm install -g vercel
   ```

2. Execute o deploy

   ```bash
   vercel
   ```

Lembre-se de cadastrar as três variáveis `VITE_EMAILJS_*` no painel do Vercel —
elas não vêm do `.env` local no build de produção.

## 📜 Scripts Disponíveis

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento (`--host`, acessível na rede local) |
| `npm run build` | Build de produção |
| `npm run preview` | Serve o build em `http://localhost:4173` |
| `npm run lint` | ESLint |
| `npm test` | Suíte de testes |
| `npm run test:watch` | Testes em modo observação |
| `npm run test:coverage` | Testes com relatório de cobertura |
| `npm run images` | Converte as imagens de `src/assets` para WebP |

## 📧 Contato

**Instituto Dr. Rocha Lima**

- Website: [www.irl.org.br](https://www.irl.org.br)
- E-mail: [irl@irl.org.br](mailto:irl@irl.org.br)
- Telefone: (85) 3243-6120
- Endereço: R. Eretides Martins, 977 — São Gerardo, Fortaleza/CE, 60320-350
- Instagram: [@somosirl](https://instagram.com/somosirl)
- Facebook: [somosirl](https://facebook.com/somosirl)

## 💖 Apoio

Se você deseja apoiar o Instituto Dr. Rocha Lima, visite a [página de doações](https://www.irl.org.br/participe) ou entre em contato para saber mais sobre como contribuir.

---

<div align="center">
  Desenvolvido para o Instituto Dr. Rocha Lima
</div>
