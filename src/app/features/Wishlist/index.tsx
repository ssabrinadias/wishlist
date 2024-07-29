'use client';
import Container from '@/components/Container';
import Product from '@/components/WishlistList';
import { ProductProvider } from '@/context/ProductContext';
import { IProduct } from '@/interfaces/products';
import { FC } from 'react';

interface HomeProps {
  products: IProduct[];
}

const Home: FC<HomeProps> = ({ products }) => {
  const showProducts = products.length;
  const voidList = () => (
    <div className="flex items-center justify-center h-80">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Nenhum produto guardado em favorito
        </h2>
      </div>
    </div>
  );
  return (
    <ProductProvider initialProducts={products}>
      <Container title="Wishlist">
        <div className="flex flex-wrap -mx-2 justify-center">
          {showProducts ? <Product /> : voidList()}
        </div>
      </Container>
    </ProductProvider>
  );
};

export default Home;
