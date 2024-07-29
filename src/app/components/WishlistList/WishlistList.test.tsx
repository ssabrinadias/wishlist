import TestProviders from '@/__mocks__/TestProviders';
import { QueryClient } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import Product from '.';
import mock from '../../__mocks__/mock-products.json';

describe('Home', () => {
  const queryClient = new QueryClient();
  test('renders ProductContent and corretly quantify itens ', async () => {
    render(
      <TestProviders initialProducts={mock.products}>
        <Product />
      </TestProviders>
    );
    const itens = await screen.getAllByTestId('product-item');
    expect(itens.length).toBe(24);
  });
  test('renders ProductContent with empty products array without crashing', () => {
    render(
      <TestProviders>
        <Product />
      </TestProviders>
    );

    expect(
      screen.queryByText(
        'Desculpe, algo deu errado. Por favor, tente novamente mais tarde.'
      )
    ).not.toBeInTheDocument();
  });
});
