import { CartContext } from "@/providers/cart";
import { FunctionComponent, useContext } from "react";

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
  const { products } = useContext(CartContext);
  return (
    <div>
      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
