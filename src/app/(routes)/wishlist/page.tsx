import { getData } from '@/services/getData';
import { Metadata } from 'next';
import dynamicImport from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Loja de Artigos Esportivos Online | Netshoes',
  description:
    'Encontre roupas, suplementos, tênis, chuteiras e mais na Netshoes, sua loja de artigos esportivos com preços incríveis. Visite-nos agora e aproveite!',
};

const Wishlist = dynamicImport(() => import('@/components/Wishlist'), {
  ssr: false,
});
const Header = dynamicImport(() => import('@/components/Header'), {
  ssr: false,
});
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
