//- types/products.ts

export interface Product {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  image: ProductImage;
  features: ProductFeature[];
  testimonies: ProductTestimony[];
}

interface ProductImage {
  src: string;
  width: number;
  height: number;
}

interface ProductFeature {
  icon: string;
  title: string;
  description: string;  
}

interface ProductTestimony {
  photo: string;
  name: string;
  role: string;
  quote: string;
}
