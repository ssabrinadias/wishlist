import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../config/server';
import HomePage from './page';

describe('HomePage', () => {
  test.skip('should render corretly the Page Home', async () => {
    render(await HomePage());

    const headingElement = screen.getByRole('heading', { name: /Home/i });
    expect(headingElement).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test.skip('should render error message when API fails', async () => {
    server.use(
      rest.get('http://localhost:3000/api/product', (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    expect(async () => {
      render(await HomePage());
    }).toThrow();
  });
});
