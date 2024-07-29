import { IProduct } from '@/interfaces/products';
import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface ProductContextType {
  products: IProduct[] | undefined;
  setProducts: (products: IProduct[]) => void;
  updateWishlist: boolean;
  setUpdateWishlist: (id: boolean) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
  initialProducts: IProduct[] | undefined;
}

export const ProductProvider: FC<ProductProviderProps> = ({
  children,
  initialProducts,
}) => {
  const [products, setProducts] = useState<IProduct[] | undefined>(
    initialProducts
  );
  const [updateWishlist, setUpdateWishlist] = useState<boolean>(false);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        updateWishlist,
        setUpdateWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
