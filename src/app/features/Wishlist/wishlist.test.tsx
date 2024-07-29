import { IProduct } from '@/interfaces/products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Wishlist from '.';
import mock from '../../__mocks__/mock-products.json';

const mockProducts = mock.products;

describe('Wishlist', () => {
  const queryClient = new QueryClient();
  test('should render corretly Wishlist Component', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Wishlist products={mockProducts} />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Wishlist')).toBeInTheDocument();
    });
    const subTitles = screen.getAllByText(
      /Tênis Nike Revolution 7 Feminino - Preto\+Branco/i
    );
    expect(subTitles).toHaveLength(1);
    subTitles.forEach((subTitle) => {
      expect(subTitle).toBeInTheDocument();
    });
  });

  test('should render generic message when no products are available', () => {
    const emptyProducts: IProduct[] = [];
    render(
      <QueryClientProvider client={queryClient}>
        <Wishlist products={emptyProducts} />
      </QueryClientProvider>
    );

    expect(
      screen.getByText('Nenhum produto guardado em favorito')
    ).toBeInTheDocument();
  });
});
