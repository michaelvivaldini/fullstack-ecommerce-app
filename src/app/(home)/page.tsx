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
        <p className="pl-5 mb-3 font-bold uppercase">Ofertas</p>
        <ProductList products={promotions} />
      </div>

      <Image
        src="/banner-home-02.png"
        height={0}
        width={0}
        className="h-auto w-full p-5"
        sizes="100vw"
        alt="Até 55% de desconto em mouses!"
      />
    </main>
  );
};

export default Home;
