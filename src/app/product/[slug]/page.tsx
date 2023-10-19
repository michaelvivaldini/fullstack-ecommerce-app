import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { FunctionComponent } from "react";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";

interface ProductDetailsPageProps {
  params: { slug: string };
}

const ProductDetailsPage: FunctionComponent<ProductDetailsPageProps> = async ({
  params: { slug },
}) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: { not: slug },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages name={product.name} imageUrls={product.imageUrls} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
