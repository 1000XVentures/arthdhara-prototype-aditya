export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  image?: string;
  features?: string[];
  // Add any other fields that your products might have
}
