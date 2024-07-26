import { getData } from '@/services/getData';
import { Metadata } from 'next';
import Header from './components/Header';
import Home from './components/Home';

export const metadata: Metadata = {
  title: 'Loja de Artigos Esportivos Online | Netshoes',
  description:
    'Encontre roupas, suplementos, tênis, chuteiras e mais na Netshoes, sua loja de artigos esportivos com preços incríveis. Visite-nos agora e aproveite!',
};

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const data = await getData();

  return (
    <>
      <Header />
      <Home products={data.props.products} />
    </>
  );
}
