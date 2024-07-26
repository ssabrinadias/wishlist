import { render, screen } from '@testing-library/react';
import mock from '../../__mocks__/mock-products.json';
import Product from './';

describe('Home', () => {
  test('renders ProductContent and outputs debug information', () => {
    render(<Product products={mock.products} />);

    expect(
      screen.getAllByAltText(
        /Tênis Nike Revolution 7 Feminino - Preto\+Branco/
      )[0]
    ).toBeInTheDocument();
    expect(screen.getAllByText(/39999/)[0]).toBeInTheDocument();
    expect(screen.getAllByText('★★★★★')[0]).toBeInTheDocument();
  });
  test('renders ProductContent with empty products array without crashing', () => {
    render(<Product products={[]} />);

    expect(
      screen.queryByText(
        'Desculpe, algo deu errado. Por favor, tente novamente mais tarde.'
      )
    ).not.toBeInTheDocument();
  });
});
