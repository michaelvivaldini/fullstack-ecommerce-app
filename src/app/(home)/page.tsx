"use client"

import Image from "next/image";
import { FunctionComponent } from "react";

interface HomeProps {
  
}
 
const Home: FunctionComponent<HomeProps> = () => {
  return ( 
    <main className="p-5">
      <Image src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 55% de desconto neste mês!"
      />
    </main>
   );
}
 
export default Home;