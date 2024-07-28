import { NextResponse } from 'next/server';

const API_URL = 'http://localhost:9000/products';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch wishlist');
    }

    const data = await response.json();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=59',
      },
    });
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
