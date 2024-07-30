# Wishlist

### Descrição

O projeto é uma aplicação de e-commerce que permite aos usuários adicionar produtos a uma lista de desejos. Os usuários podem visualizar, adicionar e gerenciar seus produtos desejados.

### Funcionalidades
- Adicionar produtos à lista de desejos
- Visualizar a lista de desejos
- Remover produtos da lista de desejos


### Decisões de Arquitetura
    Este projeto é uma aplicação React construída com Next14. Ele utiliza várias ferramentas e bibliotecas para desenvolvimento, testes e construção da aplicação. A arquitetura é baseada em uma Arquitetura Orientada a Componentes, onde o foco principal é construir o sistema a partir de componentes modulares e independentes. 

    Optamos por usar SSR (Server-Side Rendering) em nossa aplicação para melhorar o SEO, acelerar o carregamento inicial, proporcionar uma melhor experiência de usuário, e facilitar a manutenção e o desenvolvimento.

    Optamos por usar o MongoDB como nossa solução de armazenamento visando o uso do SSR garantindo acesso e persistência das informações atraves de um BFF onde ele esta localizado.

    

### Technologies

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

### Versões de instalação

- Project Version: `0.0.0`
- Node Version: `20+`

## Installation

Para começar com o projeto, você precisa ter o Node.js (v20) e o yarn instalados.

Clone the repository:

```bash
git clone https://github.com/ssabrinadias/wishlist
cd wishlist
```


Install dependencies:


```bash
yarn install
```

## Scripts

### Development

To start the development server:

```bash
yarn dev

Running on port http://localhost:3000/
```

To run the tests:

```bash
 yarn test
```

