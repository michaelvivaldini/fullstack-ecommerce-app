import { CartContext, CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { FunctionComponent, useContext } from "react";
import { Button } from "./button";

interface CartItemProps {
  product: CartProduct;
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const { increaseProductQuantity, decreaseProductQuantity, removeProduct } = useContext(CartContext);

  const handleDecreaseCartProductClick = () => {
    decreaseProductQuantity(product.id)
  }

  const handleIncreaseCartProductClick = () => {
    increaseProductQuantity(product.id)
  }

  const handleRemoveProductClick = () => {
    removeProduct(product.id)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sm">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">{product.totalPrice.toFixed(2)}</p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Button
              onClick={handleDecreaseCartProductClick}
              size="icon"
              variant="outline"
              className="h-8 w-8"
            >
              <ArrowLeftIcon size={16} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button
              onClick={handleIncreaseCartProductClick}
              size="icon"
              variant="outline"
              className="h-8 w-8"
            >
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button onClick={handleRemoveProductClick} size="icon" variant="outline">
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
