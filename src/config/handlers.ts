import { rest } from "msw";
import mock from '../app/__mocks__/mock-products.json';

export const handlers = [
  rest.get('http://localhost:3000/api/product', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mock)
    );
  }),
];
