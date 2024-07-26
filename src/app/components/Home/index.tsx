import Container from '@/components/Container';
import Product from '@/components/ProductsList';
import { IProduct } from '@/interfaces/products';
import { FC } from 'react';

interface Props {
  products: IProduct[];
}

const Home: FC<Props> = ({ products }) => {
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
      <div className="flex flex-wrap -mx-2 justify-center">
        {products?.length > 0 ? <Product products={products} /> : voidList()}
      </div>
    </Container>
  );
};

export default Home;
