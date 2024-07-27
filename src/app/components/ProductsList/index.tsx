'use client';

import { IProduct } from '@/interfaces/products';
import { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ProductCard from '../ProductCard';

const ITEMS_PER_BATCH = 4;

const ProductContent = ({ products }: { products: IProduct[] }) => {
  const [loadedItems, setLoadedItems] = useState(ITEMS_PER_BATCH);
  const { inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      setLoadedItems((prevItems) => prevItems + ITEMS_PER_BATCH);
    }
  }, [inView]);

  const productsMemoaize = useMemo(
    () =>
      products?.map((product, index) => (
        <ProductCard
          key={product.code + index}
          product={products[0]}
          priority={index === 0}
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
