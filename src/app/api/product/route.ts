import { NextResponse } from 'next/server';
import mock from '../../__mocks__/mock-products.json';

export async function GET() {
 

  return NextResponse.json(mock, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=59',
    },
  });


}
