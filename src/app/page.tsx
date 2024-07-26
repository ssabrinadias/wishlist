import Container from '@/components/Container';
import Product from '@/components/Products';
import { getData } from '@/services/getData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loja de Artigos Esportivos Online | Netshoes',
  description:
    'Encontre roupas, suplementos, tênis, chuteiras e mais na Netshoes, sua loja de artigos esportivos com preços incríveis. Visite-nos agora e aproveite!',
};

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <Container>
        <div className="flex flex-wrap -mx-2 justify-center">
          <Product products={data?.props?.products} />
        </div>
      </Container>
    </div>
  );
}
