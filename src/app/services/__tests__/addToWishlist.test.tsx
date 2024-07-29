import { rest } from 'msw';
import { server } from '../../../config/server';
import { updateToWishlist } from '../updateToWishlist';

describe('addToWishlist', () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  it('should add product to wishlist successfully', async () => {
    const productId = '1';
    const response = await updateToWishlist({
      productId: '1',
      statusUpdate: true,
      userId: '2',
    });
    expect(response).toEqual({
      message: 'Product update to wishlist successfully',
    });
  });
  it('should fail to add product to wishlist if API returns an error', async () => {
    server.use(
      rest.post('http://localhost:3000/api/wishlist', (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ message: 'Failed to update product to wishlist' })
        );
      })
    );

    const productId = '1';
    await expect(
      updateToWishlist({
        productId: '1',
        statusUpdate: true,
        userId: '2',
      })
    ).rejects.toThrow('Failed to update product to wishlist');
  });
});
