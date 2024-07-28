import { IProduct } from '@/interfaces/products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '.';
import mock from '../../__mocks__/mock-products.json';

describe('Home', () => {
  const queryClient = new QueryClient();
  test('should render corretly Home Component', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home data={mock} />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(
        screen.getAllByText(
          /Tênis Nike Revolution 7 Feminino - Preto\+Branco/i
        )[0]
      ).toBeInTheDocument();
    });

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  test('should render generic message when no products are available', () => {
    const emptyProducts: IProduct[] = [];
    render(
      <QueryClientProvider client={queryClient}>
        <Home data={null} />
      </QueryClientProvider>
    );

    expect(screen.getByText('Nenhum produto encontrado')).toBeInTheDocument();
  });
});
