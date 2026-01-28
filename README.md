
# Guia de Limpeza Espiritual Umbanda 🌿✨

Este é um aplicativo interativo e educativo baseado na obra de **Pai Wanderson Maciel**. O objetivo é auxiliar na harmonização e proteção energética de lares e indivíduos através dos preceitos da Umbanda, utilizando Inteligência Artificial (Gemini API) para fornecer conselhos personalizados.

## 🚀 Funcionalidades

- **Consultor Espiritual IA**: Receba orientações personalizadas baseadas em sintomas e relatos.
- **Guia de Ervas**: Catálogo de ervas quentes, mornas e frias e seus usos.
- **Rituais Práticos**: Instruções passo a passo para defumação, banhos e firmezas.
- **PWA (Progressive Web App)**: Pode ser instalado no celular e funciona offline para consultas rápidas.
- **Design Responsivo**: Otimizado para dispositivos móveis com rolagem suave e interface intuitiva.

## 🛠️ Tecnologias Utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Gemini API](https://ai.google.dev/) (Modelo Gemini 3 Flash)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/guia-umbanda.git
   cd guia-umbanda
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure sua API Key:**
   Crie um arquivo `.env` na raiz do projeto e adicione sua chave do Google Gemini:
   ```env
   API_KEY=sua_chave_aqui
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

## 🌐 Implantação no Netlify

Este projeto está pronto para o Netlify.

1. Conecte seu repositório GitHub ao Netlify.
2. Nas configurações de **Build & Deploy**, defina:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Vá em **Environment Variables** e adicione:
   - `API_KEY`: Sua chave secreta do Gemini.

## 📄 Licença

Este projeto é para fins educacionais e de auxílio espiritual. O conteúdo é baseado na tradição da Umbanda e na obra mencionada.

---
**Axé! 🙏**
