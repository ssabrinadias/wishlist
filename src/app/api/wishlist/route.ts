import { NextRequest, NextResponse } from 'next/server';
import { getRequestBody } from '../../../utils/parserBody';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId')  

  if (!userId) {
    throw new Error('Failed user id required');
  }

  try {
    const apiUrl = `http://localhost:9000/wishlist/${userId}`;
    const response = await fetch(apiUrl, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    let errorMessage = 'An unknown error occurred in wishlist';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  
  const data = await getRequestBody(req);
  const {userId,productId} = data;
  const apiUrl = 'http://localhost:9000';
   const response = await fetch(`${apiUrl}/wishlist/${userId}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, userId }),
  });
  if (!response.ok) {
    throw new Error('Failed to add product to  API');
  }

     return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=59',
      },
    });
}

