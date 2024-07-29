import { IResponseWishlist } from '@/interfaces/wishlist';

interface IProp {
  props: IResponseWishlist;
}

export async function getWishlist(userId: string): Promise<IProp> {
  const apiUrl = process.env.NEXT_API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/wishlist?userId=${userId}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: IResponseWishlist = await res.json();

    return {
      props: {
        products: data.products,
        userId: data.userId,
      },
    };
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    throw new Error('Failed to fetch wishlist');
  }
}
