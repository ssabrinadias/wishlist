import { useProductContext } from '@/context/ProductContext';
import useUpdateWishlist from '@/hooks/useUpdateTasks';
import { IProduct } from '@/interfaces/products';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import dataConfig from '../../__mocks__/data-config.json';
import ProductPrice from '../ProductPrice';
import RatingStars from '../RatingStars';
import styles from './ProductCard.module.css';

interface Props {
  product: IProduct;
  priority?: boolean;
  wishlist?: boolean;
}

const ProductCard = ({ product, wishlist }: Props) => {
  const { mutate, status } = useUpdateWishlist();
  const { setUpdateWishlist } = useProductContext();
  const {
    salePriceInCents,
    fullPriceInCents,
    image,
    name,
    rating,
    isInWishlist,
  } = product;
  const hasDiscount = salePriceInCents && fullPriceInCents > salePriceInCents;
  const [isFavorite, setIsFavorite] = useState(wishlist || isInWishlist);
  const switchWishItem = () => {
    mutate({
      productId: product.id,
      userId: dataConfig.userId,
      statusUpdate: !isFavorite,
    });
    setIsFavorite((status) => !status);
  };

  useEffect(() => {
    if (status === 'error') {
      setIsFavorite(false);
    }
    if (wishlist && status === 'success') {
      setUpdateWishlist(true);
    }
  }, [setUpdateWishlist, status, wishlist]);

  const heartColorClass = isFavorite ? 'text-red-500' : 'text-gray-500';

  const Wishlist = () => (
    <button
      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-lg"
      onClick={switchWishItem}
      data-testid="wishlist-button"
    >
      <FaHeart
        className={`h-5 w-5 ${heartColorClass}`}
        data-testid="wishlist-svg"
      />
    </button>
  );

  const TitleProduct = () => (
    <div className={`font-medium text-base mb-0 ${styles.lineClamp}`}>
      {name}
    </div>
  );
  return (
    <div
      className="relative m-5 px-2 mb-4 rounded-sm shadow"
      style={{ width: '220px', height: '295px' }}
      data-testid="product-item"
    >
      <div className="relative w-full h-36 mt-2">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality="85"
        />
        <Wishlist />
      </div>
      <div className="px-1 py-4">
        <TitleProduct />
        <RatingStars rating={rating} />
        <ProductPrice
          salePriceInCents={salePriceInCents}
          fullPriceInCents={fullPriceInCents}
          hasDiscount={hasDiscount}
        />
      </div>
    </div>
  );
};

export default ProductCard;
