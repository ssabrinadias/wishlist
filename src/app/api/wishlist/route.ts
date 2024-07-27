import { NextResponse } from 'next/server';
import mock from '../../__mocks__/mock-products.json';


export async function GET() {
 
  return NextResponse.json(mock, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=59',
    },
  });


}

export async function POST(request: Request) {
  const newProduct = await request.json();

  return NextResponse.json({ message: 'Product added to wishlist' }, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
 

  return NextResponse.json({ message: 'Product removed from wishlist' }, { status: 200 });
}
