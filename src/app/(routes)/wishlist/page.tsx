import { getWishlist } from '@/services/getWishlist';
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
  const sessionCookie = 'a239119c-47a2-45d7-b739-90461a5bddf4';
  const userId = '231fd54d-ff64-4bbe-b261-d8c7224895c6';

  const data = await getWishlist(userId, sessionCookie);
  return (
    <>
      <Header />
      <Wishlist products={data.props.products} />
    </>
  );
}
