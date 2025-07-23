//- app/api/products/route.ts

import { NextResponse } from 'next/server';
import ProductRecords from '@/data/products.json';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(ProductRecords);
}
