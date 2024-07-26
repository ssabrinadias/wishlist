import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../config/server';
import HomePage from './page';

describe('HomePage', () => {
  test('should render corretly the Page Home', async () => {
    render(await HomePage());
  });

  test('should render error message when API fails', async () => {
    server.use(
      rest.get('http://localhost:3000/api/product', (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ error: 'Internal Server Error' })
        );
      })
    );

    render(await HomePage());

    await waitFor(() => {
      expect(
        screen.getByText('Desculpe, tivemos um erro por aqui!')
      ).toBeInTheDocument();
    });
  });
});
