import { prismaClient } from "@/lib/prisma";
import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";

const Home = async () => {
  const promotions = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <main className="flex flex-col gap-3">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full p-5"
        sizes="100vw"
        alt="Até 55% de desconto neste mês!"
      />
      <div className="mt-8 p-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductList products={promotions} />
      </div>
    </main>
  );
};

export default Home;
