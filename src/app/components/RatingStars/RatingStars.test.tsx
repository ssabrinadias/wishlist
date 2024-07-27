import { render, screen } from '@testing-library/react';
import RatingStars from '../RatingStars';

describe('RatingStars', () => {
  test('renders the correct number of filled, half, and empty stars', () => {
    const { rerender } = render(<RatingStars rating={4.5} />);

    expect(screen.getAllByTestId('filled-star')).toHaveLength(4);
    expect(screen.getByTestId('half-star')).toBeInTheDocument();

    expect(screen.getByText('4.5')).toBeInTheDocument();

    rerender(<RatingStars rating={3.2} />);

    expect(screen.getAllByTestId('filled-star')).toHaveLength(3);
    expect(screen.getAllByTestId('empty-star')).toHaveLength(2);

    expect(screen.getByText('3.2')).toBeInTheDocument();

    rerender(<RatingStars rating={0} />);

    expect(screen.queryByTestId('filled-star')).toBeNull();
    expect(screen.queryByTestId('half-star')).toBeNull();
    expect(screen.getAllByTestId('empty-star')).toHaveLength(5);

    expect(screen.getByText('0.0')).toBeInTheDocument();
  });
});
