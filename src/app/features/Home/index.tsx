'use client';

import Container from '@/components/Container';
import Pagination from '@/components/Pagination';
import Product from '@/components/ProductsList';
import { ProductProvider } from '@/context/ProductContext';
import { IResponseProduct } from '@/interfaces/products';
import { FC, useState } from 'react';
interface Props {
  data: IResponseProduct | null;
}

const Home: FC<Props> = ({ data }) => {
  const { products, totalPages } = data || {};
  const showProducts = products?.length;
  const [currentPage, setCurrentPage] = useState(1);
  const voidList = () => (
    <div className="flex items-center justify-center h-80">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Nenhum produto encontrado
        </h2>
      </div>
    </div>
  );
  return (
    <Container title="Home">
      <ProductProvider initialProducts={products}>
        <div className="flex flex-wrap -mx-2 justify-center">
          {showProducts ? (
            <>
              <Product />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages || 0}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            voidList()
          )}
        </div>
      </ProductProvider>
    </Container>
  );
};

export default Home;
