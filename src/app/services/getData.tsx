import { IProduct, IResponseProduct } from '../interfaces/products';

export async function getData(): Promise<{ props: { products: IProduct[] } }> {
  const apiUrl = process.env.NEXT_API_URL;
  const res = await fetch(`${apiUrl}/api/product`, {
    next: { revalidate: 60 },
  });
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
