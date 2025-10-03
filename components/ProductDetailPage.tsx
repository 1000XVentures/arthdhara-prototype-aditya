import React from "react";
import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface ProductDetailPageProps {
  product: Product;
  allProducts: Product[];
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  allProducts,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-[#0B1215] mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>

            {/* Additional Product Information */}
            <div className="space-y-4 mb-8">
              {product.features && (
                <div>
                  <h3 className="text-xl font-semibold mb-2">Features</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div className="mt-auto">
              <Link
                href="/contact"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Contact for Pricing
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {allProducts.length > 1 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#0B1215] mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts
                .filter((p) => p._id !== product._id)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct._id}
                    href={`/hub/articles/${relatedProduct.slug.current}`}
                    className="group"
                  >
                    <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                      {relatedProduct.image && (
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-[#0B1215] group-hover:text-green-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
