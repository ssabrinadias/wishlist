import TestProviders from '@/__mocks__/TestProviders';
import { QueryClient } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import {
  default as mock,
  default as mockProduct,
} from '../../__mocks__/mock-products.json';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  const queryClient = new QueryClient();

  test('renders product details correctly', async () => {
    render(
      <TestProviders initialProducts={mock.products}>
        <ProductCard product={mockProduct.products[1]} priority={true} />
      </TestProviders>
    );

    await expect(
      screen.getAllByText(
        /Bola de Futebol Society Penalty 8 X \- Branco\+Verde Limão/
      )[0]
    ).toBeInTheDocument;

    expect(screen.getAllByText(/220,00/)).toBeInTheDocument;
    expect(screen.getAllByText(/174,99/)).toBeInTheDocument;
  });

  test('wishlist button click updates isFavorite state', async () => {
    render(
      <TestProviders initialProducts={mock.products}>
        <ProductCard product={mockProduct.products[0]} priority={true} />
      </TestProviders>
    );

    const button = await screen.getByTestId('wishlist-button');

    act(() => {
      fireEvent.click(button);
    });

    await new Promise((resolve) => setTimeout(resolve, 250));

    expect(screen.getByTestId('wishlist-svg')).toHaveClass(
      'h-5 w-5 text-red-500'
    );
  });
});
