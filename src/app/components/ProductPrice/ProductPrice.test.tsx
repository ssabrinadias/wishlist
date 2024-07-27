import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductPrice from '../ProductPrice';

describe('ProductPrice', () => {
  test('renders sale price correctly', () => {
    render(
      <ProductPrice
        salePriceInCents={'15000'}
        fullPriceInCents={'20000'}
        hasDiscount={false}
      />
    );

    const salePrice = screen.getByText('R$ 150,00');
    expect(salePrice).toBeInTheDocument();
  });

  test('renders full price and sale price with discount correctly', () => {
    render(
      <ProductPrice
        salePriceInCents={'15000'}
        fullPriceInCents={'20000'}
        hasDiscount={true}
      />
    );

    const fullPrice = screen.getByText('R$ 200,00');
    const salePrice = screen.getByText('R$ 150,00');

    expect(fullPrice).toBeInTheDocument();
    expect(fullPrice).toHaveClass('line-through');
    expect(salePrice).toBeInTheDocument();
  });

  test('does not render full price if no discount', () => {
    render(
      <ProductPrice
        salePriceInCents={'15000'}
        fullPriceInCents={'20000'}
        hasDiscount={false}
      />
    );

    const fullPrice = screen.queryByText('R$ 200,00');
    const salePrice = screen.getByText('R$ 150,00');

    expect(fullPrice).not.toBeInTheDocument();
    expect(salePrice).toBeInTheDocument();
  });
});
