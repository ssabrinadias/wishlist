import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../config/server';
import HomePage from './page';

describe('HomePage', () => {
  test('should render corretly the Page Home', async () => {
    render(await HomePage());

    const headingElement = screen.getByRole('heading', { name: /Home/i });
    expect(headingElement).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('should render error message when API fails', () => {
    server.use(
      rest.get('http://localhost:3000/api/product', (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    expect(() => {
      render(HomePage());
    }).toThrow();
  });
});
