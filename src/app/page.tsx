import { Metadata } from 'next';
import Container from './components/Container';
import Product from './components/Products';
import { IProduct, IResponseProduct } from './interfaces/products';

export const metadata: Metadata = {
  title: 'Loja de Artigos Esportivos Online | Netshoes',
  description:
    'Encontre roupas, suplementos, tênis, chuteiras e mais na Netshoes, sua loja de artigos esportivos com preços incríveis. Visite-nos agora e aproveite!',
};

async function getData(): Promise<{ props: { products: IProduct[] } }> {
  const apiUrl = process.env.NEXT_API_URL;
  const res = await fetch(`${apiUrl}/api/product`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: IResponseProduct = await res.json();

  return {
    props: {
      products: data.products,
    },
  };
}

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
