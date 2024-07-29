import { IResponseProduct } from '../interfaces/products';

const myHeaders = new Headers();
myHeaders.append("userId", "507f1f77bcf86cd799439012");

export async function getProducts(page: number = 1, pageSize: number = 8): Promise<{ props: IResponseProduct }> {
  const apiUrl = process.env.NEXT_API_URL;
  const res = await fetch(`${apiUrl}/api/product?page=${page}&pageSize=${pageSize}`, {
    cache: 'no-store',
    headers: myHeaders
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
   