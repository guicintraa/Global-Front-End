# 🌐 FutureSkills – Plataforma de Recomendação de Carreiras Tech  
**Global Solution – FIAP**  
**Front-end + Back-end + Banco de Dados**

---

##   INTEGRANTES

Guilherme Batista Cintra RM 562850
Davi Tagawa Schincaglia Lima Lemos RM 563457
Caio Felipe Silva RM 564615

## 📌 1. Título e Descrição
O **FutureSkills** é uma plataforma desenvolvida para ajudar estudantes a descobrir qual carreira de tecnologia combina mais com seu perfil.  
O sistema integra **Front-end (React + Vite + TypeScript)**, **API Java (Quarkus)** e **Banco Oracle**, oferecendo uma solução completa de ponta a ponta.

---

## 📌 2. Status do Projeto
- ✔️ Banco de Dados finalizado  
- ✔️ API Java hospedada e funcionando (Render)  
- ✔️ Front-end integrado  
- ✔️ Consumo real da API  

---

## 📌 4. Sobre o Projeto
O FutureSkills utiliza Inteligência Artificial (treinada em Python), banco relacional Oracle e uma API Java oficial para armazenar e exibir:

- Dados dos usuários
- Recomendação de carreira (com base no perfil)
- Cluster pertencente (agrupamento por similaridade)
- Histórico de recomendações

O front-end permite **cadastrar usuários**, **listar usuários**, **consultar detalhes**, e está totalmente conectado à API remota.

---

## 📌 5. Tecnologias Utilizadas

### **Front-end**
- React
- Vite
- TypeScript
- React Router DOM
- Axios
- TailwindCSS v4

### **Back-end (API Java)**
- Quarkus
- JAX-RS
- Oracle JDBC
- Maven
- Render (deploy)

### **Banco de Dados**
- Oracle 19c  
- Sequences  
- Triggers  
- CRUD completo  
- Scripts: `CRIA.sql`, `CARGA.sql`, `APAGA.sql`, `CONSULTAS.sql`

---

## 📌 6. Instalação

### 🔧 **Front-end**
```bash
npm install
npm run dev
















# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
