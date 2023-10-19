import Image from "next/image";
import { FunctionComponent } from "react";
import Categories from "./components/categories";

interface HomeProps {
  
}
 
const Home: FunctionComponent<HomeProps> = () => {
  return ( 
    <main className="p-5 flex flex-col gap-3">
      <Image src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 55% de desconto neste mês!"
      />
      <div className="mt-8">
      <Categories />
      </div>
      
    </main>
   );
}
 
export default Home;