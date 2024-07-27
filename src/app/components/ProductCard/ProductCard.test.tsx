import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import mockProduct from '../../__mocks__/mock-products.json';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  const queryClient = new QueryClient();

  test('renders product details correctly', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ProductCard product={mockProduct.products[1]} priority={true} />
      </QueryClientProvider>
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
      <QueryClientProvider client={queryClient}>
        <ProductCard product={mockProduct.products[0]} priority={true} />
      </QueryClientProvider>
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
