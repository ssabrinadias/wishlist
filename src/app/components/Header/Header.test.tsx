import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './';

describe('Header', () => {
  test('renders Header component correctly', () => {
    render(<Header />);

    const logo = screen.getAllByAltText('Netshoes Logo');
    expect(logo[0]).toBeInTheDocument();

    const wishlistLink = screen.getAllByText('Wishlist');
    expect(wishlistLink[0]).toBeInTheDocument();
  });

  test('should navigate to home page when logo is clicked', () => {
    const originalLocation = window.location;
    window.location = { href: '' } as any;

    render(<Header />);

    const logoLink = screen.getAllByAltText('Netshoes Logo')[0];
    userEvent.click(logoLink);

    waitFor(() => {
      expect(window.location.href).toBe('/');
    });

    window.location = originalLocation;
  });

  test('should navigate to wishlist page when wishlist link is clicked', () => {
    const originalLocation = window.location;
    window.location = { href: '' } as any;

    render(<Header />);

    const wishlistLink = screen.getByText('Wishlist');
    userEvent.click(wishlistLink);

    waitFor(() => {
      expect(window.location.href).toBe('http://localhost/wishlist');
    });

    window.location = originalLocation;
  });
});
