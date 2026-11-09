# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfólio pessoal (React + Vite) de Claudio Inácio, em português. Apresenta header, headline, tecnologias, grid de projetos e seção "sobre mim".

## Commands

```bash
npm run dev       # vite dev server (porta 3000, ver vite.config.js)
npm run build     # build de produção (saída em dist/)
npm run preview   # serve o build de produção localmente
```

Não há suíte de testes nem linter configurados neste projeto.

Gerenciador de pacotes: **npm** (via `package-lock.json`). Não recriar `yarn.lock` — ele já causou falha de build na Vercel (lockfile desatualizado, resolvia mal dependências opcionais de plataforma como `fsevents`/`@esbuild/*`, e a Vercel prioriza `yarn.lock` quando ambos existem). `vercel.json` fixa explicitamente `installCommand`/`buildCommand`/`outputDirectory` para evitar essa ambiguidade de novo. `.nvmrc`/`engines.node` fixam Node 22.x.

## Architecture

- **Entry point real**: `index.html` → `src/main.jsx` → `src/App.jsx`. `src/index.js` é resquício de um setup CRA antigo e não é usado pelo build Vite (assim como `craco.config.js`) — não assumir que está ativo.
- **Tema e estilo global**: `src/App.jsx` envolve tudo em `ThemeProvider` (tema em `src/styles/theme/index.js`) e injeta `GlobalStyle` (`src/styles/GlobalStyle.js`). Cores, glass-effect etc. vêm todos de `theme.colors`.
- **Página única**: `src/pages/home/home.jsx` monta a página compondo, em ordem, `HeaderComponent` → `HeadLineComponent` → `TechnologiesComponent` → `ProjectsComponent` → `AboutMe`. Há blocos grandes de JSX comentado no fim do arquivo (versões antigas com carrossel) — não reativar sem confirmar com o usuário.
- **Padrão de componentes** (`src/components/**`): cada componente vive em sua própria pasta com um arquivo `styleNomeDoComponente.js` irmão contendo os `styled-components` usados por ele (ex.: `header/HeaderComponent.jsx` + `header/styleHeaderComponent.js`). Componentes com subpartes têm subpastas próprias (ex.: `header/header-informations/`, `projects/project/`). Ícones ficam isolados em `src/components/modern-icons/<nome>/Icon*.jsx`.
- **Imagens**: todas em `src/image/`, importadas diretamente pelos componentes que as usam (ex.: cards de projeto).
- **dist/ e public/**: `public/` contém os assets estáticos copiados para o build; `dist/` é saída gerada do `vite build` — não editar manualmente.
