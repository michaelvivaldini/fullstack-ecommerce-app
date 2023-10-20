import { CartContext } from "@/providers/cart";
import { FunctionComponent, useContext } from "react";
import CartItem from "./cart-item";
import { Separator } from "./separator";

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);
  return (
    <div>
      <div className="flex flex-col gap-5 py-8">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <div>
            <h2 className="text-center text-lg font-bold">Carrinho vazio</h2>
            <p className="text-center text-sm">
              Aproveite agora as melhores ofertas do site!{" "}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Subtotal</p>
          <p>R$ {subTotal.toFixed(2)}</p>
        </div>

        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Entrega</p>
          <p>GRÁTIS</p>
        </div>

        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Descontos</p>
          <p>R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Total</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
