import Container from '@/components/Container';
import Product from '@/components/Products';
import { IProduct } from '@/interfaces/products';
import { FC } from 'react';

interface HomeProps {
  products: IProduct[];
}

const Home: FC<HomeProps> = ({ products }) => {
  return (
    <Container>
      <div className="flex flex-wrap -mx-2 justify-center">
        {products.length > 0 ? (
          <Product products={products} />
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Nenhum produto encontrado
            </h2>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
