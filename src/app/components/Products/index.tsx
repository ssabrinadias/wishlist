'use client';

import { Product } from '@/app/interfaces/products';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ProductCard from '../ProductCard';

const ITEMS_PER_BATCH = 4;

const ProductContent = ({ products }: { products: Product[] }) => {
  const [loadedItems, setLoadedItems] = useState(ITEMS_PER_BATCH);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      console.log('Loading more items');
      setLoadedItems((prevItems) => prevItems + ITEMS_PER_BATCH);
    }
  }, [inView]);
  return (
    <div className="flex flex-wrap -mx-2 justify-center">
      {products?.map((product, index) => (
        <ProductCard
          key={product.code + index}
          product={products[0]}
          priority={index === 0}
        />
      ))}
    </div>
  );
};

export default ProductContent;
