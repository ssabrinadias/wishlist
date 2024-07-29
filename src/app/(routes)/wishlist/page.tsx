import { getWishlist } from '@/services/getWishlist';
import { Metadata } from 'next';
import dynamicImport from 'next/dynamic';
import dataConfig from '../../__mocks__/data-config.json';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Loja de Artigos Esportivos Online | Netshoes',
  description:
    'Encontre roupas, suplementos, tênis, chuteiras e mais na Netshoes, sua loja de artigos esportivos com preços incríveis. Visite-nos agora e aproveite!',
};

const Wishlist = dynamicImport(() => import('@/features/Wishlist'));
const Header = dynamicImport(() => import('@/components/Header'));

export default async function WhislistPage() {
  const sessionCookie = 'a239119c-47a2-45d7-b739-90461a5bddf4'; //todo hardcode
  const userId = dataConfig.userId; //todo hardcode

  const data = await getWishlist(userId);
  return (
    <>
      <Header />
      <Wishlist products={data.props.products} />
    </>
  );
}
