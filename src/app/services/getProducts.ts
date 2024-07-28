import { IResponseProduct } from '../interfaces/products';


export async function getProducts(page: number = 1, pageSize: number = 8): Promise<{ props: IResponseProduct }> {
  const apiUrl = process.env.NEXT_API_URL;
  const res = await fetch(`${apiUrl}/api/product?page=${page}&pageSize=${pageSize}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: IResponseProduct = await res.json();

  return {
    props: {
      total: data.total,
      pageSize: data.pageSize,
      totalPages: data.totalPages,
      products: data.products,
    },
  };
}
   