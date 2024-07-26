import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';
import Header from './';
jest.mock('next/router');

const useRouterMock = useRouter as jest.Mock;
describe('Header', () => {
  test('renders Header component correctly', () => {
    render(<Header />);

    const logo = screen.getAllByAltText('Netshoes Logo');
    expect(logo[0]).toBeInTheDocument();

    const wishlistLink = screen.getAllByText('Wishlist');
    expect(wishlistLink[0]).toBeInTheDocument();
  });
  test('should navigate to home page when logo is clicked', () => {
    const pushMock = jest.fn();
    useRouterMock.mockReturnValue({
      push: pushMock,
      prefetch: jest.fn(),
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
    });

    render(<Header />);

    const logoLink = screen.getAllByAltText('Netshoes Logo')[0];
    userEvent.click(logoLink);

    expect(window.location.pathname).toBe('/');
  });
});
