import { rest } from 'msw';
import { server } from '../../../config/server';
import { addToWishlist } from '../addToWishlist';

describe('addToWishlist', () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  it('should add product to wishlist successfully', async () => {
    const productId = '1';
    const response = await addToWishlist(productId);
    expect(response).toEqual({
      message: 'Product added to wishlist successfully',
    });
  });

  it('should fail to add product to wishlist if API returns an error', async () => {
    server.use(
      rest.post(`http://localhost:3000/api/wishlist`, (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ message: 'Failed to add product to wishlist' })
        );
      })
    );

    const productId = '1';
    await expect(addToWishlist(productId)).rejects.toThrow(
      'Failed to add product to wishlist'
    );
  });
});
