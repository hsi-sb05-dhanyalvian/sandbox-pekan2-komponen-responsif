//- app/api/products/[slug]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import ProductRecords from '@/data/products.json';
import { Product } from '@/types/product';

export const dynamic = 'force-dynamic';

interface RouteParams {
  slug: string;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<RouteParams> }
) {
  const { slug } = await params;
  const productFound = (ProductRecords as Product[]).find(product => product.slug === slug);

  if (productFound) {
    return NextResponse.json(productFound);
  } else {
    return NextResponse.json(
      { message: `Product dengan slug "${slug}" tidak ditemukan.` },
      { status: 404 }
    );
  }
}
