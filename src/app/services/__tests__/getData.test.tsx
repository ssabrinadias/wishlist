import { rest } from 'msw';
import { server } from '../../../config/server';
import mock from '../../__mocks__/mock-products.json';
import { getData } from '../getData';

describe('getData', () => {
  it('deve buscar e retornar produtos com sucesso', async () => {
    const result = await getData();
    expect(result.props.products).toEqual(mock.products);
  });

  it('deve lidar com erro de fetch', async () => {
    server.use(
      rest.get('http://localhost:3000/api/product', (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    await expect(getData()).rejects.toThrow('Failed to fetch data');
  });
});
