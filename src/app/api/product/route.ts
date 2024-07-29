import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
const myHeaders = new Headers();
myHeaders.append("userId", "507f1f77bcf86cd799439012");


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || '1';
  const pageSize = searchParams.get('pageSize') || '8';

  try {
    const apiUrl = `http://localhost:9000/products?page=${page}&pageSize=${pageSize}`;
    const response = await fetch(apiUrl, {
      cache: 'no-cache',
      next: { revalidate: 10 },
      headers: myHeaders
    });
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    const data = await response.json();
    console.log(data)
    return NextResponse.json(data);

  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
