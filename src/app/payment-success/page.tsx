import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

interface PaymentSucessProps {}

const PaymentSuccess: FunctionComponent<PaymentSucessProps> = () => {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <div className="flex w-full mx-5 flex-col items-center rounded-2xl justify-start gap-8 bg-accent p-8 py-16">
        <div className="flex items-center justify-center gap-4">
          <CheckCircleIcon color="green" size={72} />{" "}
          <h1 className="text-3xl text-green-100">
            Compra efetuada com sucesso
          </h1>
        </div>
        <span className="text-justify">
          Sua compra seguirá para separação, posteriormente para o transporte e
          em poucos dias você estará desfrutando do seu produto.{" "}
        </span>
        <span className="text-justify">A FSW Store agradece por comprar com a gente!</span>
        <Link href="/">
          <Button className="bg-primary">Voltar para o início</Button>
        </Link>
      </div>
    </main>
  );
};

export default PaymentSuccess;
