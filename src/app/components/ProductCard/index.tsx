import { IProduct } from '@/app/interfaces/products';
import Image from 'next/image';
import { useMemo } from 'react';

interface Props {
  product: IProduct;
  priority?: boolean;
}
const ProductCard = ({ product, priority }: Props) => {
  const { salePriceInCents, fullPriceInCents, image, name, rating } = product;
  const hasDiscount = salePriceInCents && fullPriceInCents > salePriceInCents;
  const price = useMemo(() => {
    return (
      <>
        {hasDiscount && (
          <span className="line-through text-gray-500 text-sm">
            R$ {fullPriceInCents}
          </span>
        )}
        <span className="text-purple-600 text-base font-bold">
          R$ {salePriceInCents}
        </span>
      </>
    );
  }, [product]);
  return (
    <div
      className="m-5 px-2 mb-4 rounded-sm shadow"
      style={{ width: '220px', height: '295px' }}
    >
      <div className="relative w-full h-36 mt-2">
        <Image
          src={image}
          alt={name}
          fill
          objectFit="cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="px-1 py-4">
        <div className="font-bold text-base mb-2">{name}</div>
        <div className="flex items-center">
          <span className="text-yellow-500 ">★★★★★</span>;
          <span className="text-gray-600 text-xs ml-2">
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="flex flex-col">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
