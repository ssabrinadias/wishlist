import { useMutation } from '@tanstack/react-query';

import { addToWishlist } from '@/services/addToWishlist';

const useUpdateWishlist = () => {
  return useMutation({
    mutationFn: (id: string) => {
      return addToWishlist(id);
    },
    onError: (error) => console.log('erro', error),
  });
};

export default useUpdateWishlist;
