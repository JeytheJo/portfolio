# JeytheJo — Portfolio

Portfólio pessoal com tema brutalista e duas versões de interface: e-ink (claro) e terminal hacker (escuro).

## Stack

- React + Vite
- CSS puro com variáveis de tema
- Deploy via GitHub Pages

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173/portfolio/`

## Build para produção

```bash
npm run build
```

Os arquivos ficam na pasta `dist/` — é o que vai pro GitHub Pages.

## Estrutura

```
src/
├── components/     # Navbar, Hero, About, Skills, Projects, Contact
├── hooks/          # useTheme.js — lógica do toggle de tema
└── styles/         # globals.css, theme-dark.css, theme-ligth.css
```

## Status

🚧 Em desenvolvimento

- [x] Setup do projeto
- [x] Sistema de temas (dark/light)
- [x] Navbar
- [x] Hero com typing effect
- [ ] About
- [ ] Skills
- [ ] Projects
- [ ] Contact
- [ ] Deploy GitHub Pages

## Autor

João Eduardo — [github.com/JeytheJo](https://github.com/JeytheJo)