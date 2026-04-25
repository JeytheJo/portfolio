# JeytheJo — Portfolio

> Portfólio pessoal com estética brutalista e duas interfaces: **e-ink** (claro) e **terminal hacker** (escuro).

![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite)
![CSS](https://img.shields.io/badge/CSS-Variables-264de4?style=flat-square&logo=css3)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?style=flat-square&logo=github)

---

## Preview

| Terminal (dark) | E-ink (light) |
|---|---|
| Fundo preto · verde `#00ff41` · scanlines | Off-white `#f0ece0` · tipografia brutalista |

Toggle de tema disponível na navbar — a preferência é salva no `localStorage`.

---

## Stack

- **React 18** + **Vite 6** — build estático para GitHub Pages
- **CSS puro** com variáveis de tema (`[data-theme="dark/light"]`)
- **Space Mono** + **Bebas Neue** + **Share Tech Mono** — tipografia brutalista
- Foto de perfil em **dithering Floyd-Steinberg** — versão P&B e verde terminal
- Sem frameworks de CSS, sem dependências desnecessárias

---

## Funcionalidades

- ✅ Toggle de tema dark/light com persistência em `localStorage`
- ✅ Typing effect no hero (letra a letra)
- ✅ Foto dither que troca com o tema
- ✅ Layout responsivo (mobile + desktop)
- ✅ Scroll suave entre seções
- ✅ Hover effects brutalistas nos cards e botões
- ✅ Deploy automático via GitHub Pages

---

## Rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/JeytheJo/portfolio.git
cd portfolio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173/portfolio/`

---

## Build e deploy

```bash
# Gerar build de produção
npm run build

# Deploy no GitHub Pages
npm run deploy
```

---

## Estrutura

```
src/
├── components/
│   ├── Navbar.jsx      # Nav + toggle de tema
│   ├── Hero.jsx        # Foto dither + typing effect
│   ├── About.jsx       # Bio + info rápida
│   ├── Skills.jsx      # Stack por categoria
│   ├── Projects.jsx    # Grid de projetos
│   └── Contact.jsx     # Links + footer
├── hooks/
│   └── useTheme.js     # Hook de tema (dark/light)
└── styles/
    ├── globals.css     # Variáveis de tema + todos os estilos
    ├── theme-dark.css  # Estilos exclusivos do tema dark
    └── theme-ligth.css # Estilos exclusivos do tema light

public/
├── foto-dark.png       # Foto dither verde terminal
└── foto-light.png      # Foto dither P&B e-ink
```

---

## Projetos em destaque

| Projeto | Stack | Link |
|---|---|---|
| **Tô Lembrado** | React Native · Expo · SQLite | [repositório](https://github.com/JeytheJo/ToLembrado) |
| **Bodies Barber** | Flask · PostgreSQL · Tailwind | [repositório](https://github.com/JeytheJo/SistemaCRUD_Barbearia) |
| **Supermercado OOP** | Java · OOP · UML | [repositório](https://github.com/JeytheJo) |

---

## Autor

**João Eduardo** — Software Engineer & Security Enthusiast

[![GitHub](https://img.shields.io/badge/GitHub-JeytheJo-222?style=flat-square&logo=github)](https://github.com/JeytheJo)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Jo%C3%A3o%20Eduardo-0077b5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/joão-eduardo-138903226/)

---

<sub>Built with caffeine & curiosity · Piauí, Brasil</sub>