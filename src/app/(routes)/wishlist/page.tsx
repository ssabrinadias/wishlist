import { getProducts } from '@/services/getProducts';
import { Metadata } from 'next';
import dynamicImport from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Loja de Artigos Esportivos Online | Netshoes',
  description:
    'Encontre roupas, suplementos, tênis, chuteiras e mais na Netshoes, sua loja de artigos esportivos com preços incríveis. Visite-nos agora e aproveite!',
};

const Wishlist = dynamicImport(() => import('@/features/Wishlist'));
const Header = dynamicImport(() => import('@/components/Header'));

export const dynamic = 'force-dynamic';

export default async function WhislistPage() {
  //This exception is handled by default by errorBoundary
  const data = await getProducts();

  return (
    <>
      <Header />
      <Wishlist products={data.props.products} />
    </>
  );
}
