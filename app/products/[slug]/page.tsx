//- app/products/[slug]/page.tsx

import Link from 'next/link';
import Image from "next/image";
import Navbar from "@/components/navbar";
import FeatureSection from "@/components/feature-section";
import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer";
import { Product } from '@/types/product';
import { Metadata } from 'next';

async function getProductDetail(slug: string): Promise<Product | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const resp = await fetch(`${baseUrl}/api/products/${slug}`, {
    cache: 'no-store',
  });

  if (!resp.ok) {
    if (resp.status === 404) {
      return null;
    }

    console.error("Gagal mengambil detail product:", resp.status, resp.statusText);
    return null;
  }

  return resp.json();
}

interface ProductDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

// interface GenerateMetadataProps {
//   params: { slug: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// }

export async function generateMetadata({ params }: ProductDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductDetail(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = await getProductDetail(slug);

  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-red-600">Produk Tidak Ditemukan!</h1>
        <p className="mt-4">Maaf, product dengan slug `{slug}` tidak dapat kami temukan.</p>
        <Link href="/" className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Kembali ke Daftar Product
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Navbar name={product.name} />

      <div className="container mx-auto px-4 py-12 pt-24">
        <section className="text-center">
          <Image
            priority={true}
            rel="preload"
            src={product.image.src}
            alt={product.name}
            width={product.image.width}
            height={product.image.height}
            className="mx-auto mb-8"
          />
          <h1 className="text-5xl font-extrabold tracking-tight text-lucide-title">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-lucide-subtitle">
            {product.tagline}
          </p>

          <button className="
            mt-8 px-8 py-3
            bg-lucide-red
            text-white font-semibold
            cursor-pointer transition-colors
            rounded-full
            shadow-lg hover:shadow-xl
          ">
            Beli Sekarang
          </button>
        </section>

        <FeatureSection features={product.features} />

        <TestimonialSection testimonies={product.testimonies} />
      </div>

      <Footer />
    </div>
  );
}
