// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { Product } from "../../../../types/product";

// // Fix: Ensure `params` type is correctly defined
// interface ProductPageProps {
//   params: { slug: string };
// }

// // Fetch product data based on slug
// async function getProduct(slug: string): Promise<Product | null> {
//   const query = groq`*[_type == "product" && slug.current == $slug][0] {
//     _id,
//     name,
//     image,
//     price,
//     slug,
//     description
//   }`;

//   return await client.fetch(query, { slug });
// }

// // Fix: Ensure `params` is correctly inferred
// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = params;

//   const product = await getProduct(slug);

//   if (!product) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold">Product not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Product Image */}
//         <div className="aspect-square">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.name || "Product Image"}
//               width={600}
//               height={600}
//               className="rounded-lg shadow-lg"
//               priority={true}
//             />
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="flex flex-col justify-center">
//           <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//           <p className="text-xl text-gray-600 mt-4">
//             {product.price ? `$${product.price}` : "Price not available"}
//           </p>
//           <p className="text-gray-700 mt-6 leading-relaxed">
//             {product.description || "No description available for this product."}
//           </p>

//           {/* Buy Now Button */}
//           <div className="mt-8">
//             <button
//               className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-200"
//               aria-label={`Buy ${product.name}`}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Fix: Tell Next.js how to generate `params` dynamically
// export async function generateStaticParams() {
//   const query = groq`*[_type == "product"]{ slug }`;
//   const products: { slug: { current: string } }[] = await client.fetch(query);

//   return products.map((product) => ({
//     slug: product.slug.current,
//   }));
// }



import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Product } from "../../../../types/product";

// Fetch product data based on slug
async function getProduct(slug: string): Promise<Product | null> {
  const query = groq`*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    image,
    price,
    slug,
    description
  }`;

  return await client.fetch(query, { slug });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name || "Product Image"}
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
              priority={true}
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-gray-600 mt-4">
            {product.price ? `$${product.price}` : "Price not available"}
          </p>
          <p className="text-gray-700 mt-6 leading-relaxed">
            {product.description || "No description available for this product."}
          </p>

          {/* Buy Now Button */}
          <div className="mt-8">
            <button
              className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-200"
              aria-label={`Buy ${product.name}`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const query = groq`*[_type == "product"]{ slug }`;
  const products: { slug: { current: string } }[] = await client.fetch(query);

  return products.map((product) => ({
    slug: product.slug.current,
  }));
}
