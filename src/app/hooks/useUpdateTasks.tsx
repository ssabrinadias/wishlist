import { useMutation } from '@tanstack/react-query';

import { addToWishlist } from '@/services/addToWishlist';

const useUpdateWishlist = () => {
  return useMutation({
    mutationFn: ({
      productId,
      userId,
    }: {
      productId: string;
      userId: string;
    }) => {
      return addToWishlist({ productId, userId });
    },
    onError: (error) => console.log('Failed to add product to wishlist', error),
  });
};

export default useUpdateWishlist;
