import { IProduct } from '@/interfaces/products';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import mock from '../../__mocks__/mock-products.json';
import Wishlist from './';

const mockProducts: IProduct[] = mock.products;

describe('Wishlist', () => {
  test('should render corretly Wishlist Component', async () => {
    render(<Wishlist products={mockProducts} />);

    await waitFor(() => {
      expect(screen.getByText('Wishlist')).toBeInTheDocument();
    });
    const subTitles = screen.getAllByText(
      /Tênis Nike Revolution 7 Feminino - Preto\+Branco/i
    );
    expect(subTitles).toHaveLength(mockProducts.length);
    subTitles.forEach((subTitle) => {
      expect(subTitle).toBeInTheDocument();
    });
    expect(screen.getAllByText(/39999/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/30399/i)[0]).toBeInTheDocument();
  });

  test('should render generic message when no products are available', () => {
    const emptyProducts: IProduct[] = [];
    render(<Wishlist products={emptyProducts} />);

    expect(
      screen.getByText('Nenhum produto guardado em favorito')
    ).toBeInTheDocument();
  });
});
