# Site do Instituto Dr. Rocha Lima

_Leia em outros idiomas: [English](README.en.md)_

## 📋 Sobre o Projeto

Site institucional do **Instituto Dr. Rocha Lima de Proteção e Assistência à Infância**, uma organização sem fins lucrativos dedicada à proteção e assistência de crianças e adolescentes em situação de vulnerabilidade social.

Este projeto foi desenvolvido com React e Vite, oferecendo uma experiência moderna e responsiva para apresentar os programas sociais, equipe, missão e formas de contribuir com o instituto.

## 🚀 Tecnologias Utilizadas

- **React** 19.0.0 - Biblioteca JavaScript para construção de interfaces
- **Vite** 6.2.0 - Build tool e servidor de desenvolvimento
- **React Router DOM** - Navegação entre páginas
- **Tailwind CSS** 4.0.13 - Framework CSS utilitário
- **Swiper** - Carrosséis e sliders responsivos
- **React Icons** - Biblioteca de ícones
- **React Hook Form** - Gerenciamento de formulários
- **EmailJS** - Serviço de envio de e-mails
- **React Hot Toast** - Notificações toast elegantes
- **React CountUp** - Animações de números
- **React Modal** - Componentes de modal acessíveis

## 📁 Estrutura do Projeto

```
irl/
├── public/              # Arquivos públicos estáticos
├── src/
│   ├── assets/          # Imagens, vídeos e recursos
│   │   ├── img/
│   │   │   ├── documentos/
│   │   │   ├── elementos/
│   │   │   ├── fotos/
│   │   │   ├── ods/
│   │   │   └── parceiros/
│   │   └── videos/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Banner.jsx
│   │   ├── Programas/
│   │   └── ...
│   ├── pages/           # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── Programas.jsx
│   │   ├── FacaParte.jsx
│   │   └── Transparencia.jsx
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Funcionalidades

- ✨ **Interface Responsiva** - Design adaptável para desktop, tablet e mobile
- 📱 **Menu Mobile** - Navegação otimizada para dispositivos móveis
- 🎠 **Carrosséis Interativos** - Depoimentos, programas e parceiros
- 📝 **Formulário de Contato** - Integração com EmailJS
- 💰 **Sistema de Doações** - Modal com informações bancárias e opções de doação
- 📄 **Área de Transparência** - Documentos e certificações
- 🎯 **ODS (Objetivos de Desenvolvimento Sustentável)** - Alinhamento com metas globais
- 📊 **Números do Instituto** - Estatísticas com animações CountUp
- 🖼️ **Galeria de Fotos** - Exibição de atividades e programas
- ⚡ **Performance Otimizada** - Build otimizado com Vite

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

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
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key
   ```

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

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria o build de produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa o linter ESLint


## 📧 Contato

**Instituto Dr. Rocha Lima**

- Website: [www.irl.org.br](https://www.irl.org.br)
- Instagram: [@instituto_rocha_lima](https://instagram.com/instituto_rocha_lima)
- E-mail: contato@irl.org.br

## 💖 Apoio

Se você deseja apoiar o Instituto Dr. Rocha Lima, visite a página de doações ou entre em contato para saber mais sobre como contribuir.

---

<div align="center">
  Desenvolvido para o Instituto Dr. Rocha Lima
</div>
