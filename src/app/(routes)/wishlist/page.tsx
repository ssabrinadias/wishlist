import Header from '@/components/Header';
import Wishlist from '@/components/Wishlist';
import { getData } from '@/services/getData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loja de Artigos Esportivos Online | Netshoes',
  description:
    'Encontre roupas, suplementos, tênis, chuteiras e mais na Netshoes, sua loja de artigos esportivos com preços incríveis. Visite-nos agora e aproveite!',
};

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  //This exception is handled by default by errorBoundary
  const data = await getData();

  return (
    <>
      <Header />
      <Wishlist products={data.props.products} />
    </>
  );
}
