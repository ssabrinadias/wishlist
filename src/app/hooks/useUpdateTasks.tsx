import { useMutation } from '@tanstack/react-query';

import { updateToWishlist } from '@/services/updateToWishlist';

const useUpdateWishlist = () => {
  return useMutation({
    mutationFn: ({
      productId,
      userId,
      statusUpdate,
    }: {
      productId: string;
      userId: string;
      statusUpdate: boolean;
    }) => {
      return updateToWishlist({ productId, userId, statusUpdate });
    },
    onError: (error) => console.log('Failed to add product to wishlist', error),
  });
};

export default useUpdateWishlist;
