'use client';

import { useProductContext } from '@/context/ProductContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProductCard from '../ProductCard';

const ProductWishlistContent = () => {
  const { products, updateWishlist, setUpdateWishlist } = useProductContext();
  const router = useRouter();

  useEffect(() => {
    if (updateWishlist) {
      router.refresh(); // Atualiza a página
      setUpdateWishlist(false); // Redefine updateWishlist para false
    }
  }, [updateWishlist, router, setUpdateWishlist]);

  return (
    <div className="flex flex-wrap -mx-2 justify-center">
      {products?.map((product, index) => (
        <ProductCard
          key={product.code + index}
          product={product}
          priority={true}
          wishlist
        />
      ))}
    </div>
  );
};

export default ProductWishlistContent;
