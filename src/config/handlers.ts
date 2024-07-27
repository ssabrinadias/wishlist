import { rest } from "msw";
import mock from '../app/__mocks__/mock-products.json';

export const handlers = [
  rest.get('http://localhost:3000/api/product', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mock)
    );
  }),
  rest.post('http://localhost:3000/api/wishlist', (req, res, ctx) => {
    const { id } = req.body as { id: number };

    if (id) {
      return res(ctx.status(201), ctx.json({ message: 'Product added to wishlist successfully' }));
    } else {
      return res(ctx.status(400), ctx.json({ message: 'Failed to add product to wishlist' }));
    }
  }),
];
