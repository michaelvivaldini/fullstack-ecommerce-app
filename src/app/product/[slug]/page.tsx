import { prismaClient } from "@/lib/prisma";
import { FunctionComponent } from "react";
import ProductImages from "./components/product-images";

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
  });

  if (!product) return null;

  return (
    <div>
      <ProductImages name={product.name} imageUrls={product.imageUrls} />
    </div>
  );
};

export default ProductDetailsPage;
