import { Metadata, NextPage } from 'next';
import mock from './__mocks__/mock-products.json';
import Container from './components/Container';
import Product from './components/Products';

export const metadata: Metadata = {
  title: 'Loja de Artigos Esportivos Online | Netshoes',
  description:
    'Encontre roupas, suplementos, tênis, chuteiras e mais na Netshoes, sua loja de artigos esportivos com preços incríveis. Visite-nos agora e aproveite!',
};
const ITEMS_PER_BATCH = 4;

const Home: NextPage = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-wrap -mx-2 justify-center">
          <Product products={mock.products} />
        </div>
      </Container>
    </div>
  );
};

export default Home;
