'use client';

import { useProductContext } from '@/context/ProductContext';
import { useMemo } from 'react';
import ProductCard from '../ProductCard';

const ProductContent = () => {
  const { products } = useProductContext();
  const productsMemoaize = useMemo(
    () =>
      products?.map((product, index) => (
        <ProductCard
          key={product.code + index}
          product={product}
          priority={true}
        />
      )),
    [products]
  );
  return (
    <div className="flex flex-wrap -mx-2 justify-center">
      {productsMemoaize}
    </div>
  );
};

export default ProductContent;
