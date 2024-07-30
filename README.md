# Wishlist

### Descrição

O projeto é uma aplicação de e-commerce que permite aos usuários adicionar produtos a uma lista de desejos. Os usuários podem visualizar, adicionar e gerenciar seus produtos desejados.

### Funcionalidades

- Adicionar produtos à lista de favoritos
- Visualizar a lista de favoritos
- Remover produtos da lista de favoritos

### Decisões de Arquitetura

Este projeto é uma aplicação React construída com Next.js 14. Utilizei várias ferramentas e bibliotecas para desenvolvimento, testes e construção da aplicação. A arquitetura é baseada em uma Arquitetura Orientada a Componentes, focando na construção do sistema a partir de componentes modulares e independentes.

Optei por usar SSR (Server-Side Rendering) para melhorar o SEO, acelerar o carregamento inicial, proporcionar uma melhor experiência de usuário e facilitar a manutenção e o desenvolvimento.

Escolhi o MongoDB como  solução de armazenamento devido ao uso do SSR, garantindo acesso e persistência das informações através de um BFF (Backend for Frontend) onde ele está localizado.

### Tecnologias

- React
- Next
- TypeScript
- React Query
- Jest
- React Testing Library
- MSW
- Husky
- Tailwind CSS
- PostCSS

### Versões

- Project Version: `0.0.0`
- Node Version: `20+`

## Instalação

Para começar com o projeto, você precisa ter o Node.js (v20) e o yarn instalados.

### Atenção

Link: [Repositório BFF](doc:https://github.com/ssabrinadias/wishlist-bff)

Esse projeto possui dependencia de uma aplicação BFF sugerimos que clique no link acima, siga os passos de instalação e retome os proximos passos a seguir:


Clone the repository FRONT:

```bash
git clone https://github.com/ssabrinadias/wishlist
cd wishlist
```

Install dependencies:

```bash
yarn install
```

## Scripts

### Desenvolvimento

To start the development server:

```bash
yarn dev

Running on port http://localhost:3000/
```

To run the tests:

```bash
 yarn test
```
