import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import Product from '.';
import mock from '../../__mocks__/mock-products.json';

describe('Home', () => {
  const queryClient = new QueryClient();
  test('renders ProductContent and corretly quantify itens ', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Product products={mock.products} />
      </QueryClientProvider>
    );
    const itens = await screen.getAllByTestId('product-item');
    expect(itens.length).toBe(24);
  });
  test('renders ProductContent with empty products array without crashing', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Product products={[]} />
      </QueryClientProvider>
    );

    expect(
      screen.queryByText(
        'Desculpe, algo deu errado. Por favor, tente novamente mais tarde.'
      )
    ).not.toBeInTheDocument();
  });
});
