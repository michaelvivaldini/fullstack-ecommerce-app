import { prismaClient } from "@/lib/prisma";
import { FunctionComponent } from "react";

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

  return <h1>{product?.name}</h1>;
};

export default ProductDetailsPage;
