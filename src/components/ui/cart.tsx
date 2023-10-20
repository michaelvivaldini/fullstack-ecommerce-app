import { CartContext } from "@/providers/cart";
import { FunctionComponent, useContext } from "react";
import CartItem from "./cart-item";

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-5 py-8">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cart;
