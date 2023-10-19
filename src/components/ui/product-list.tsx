import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { FunctionComponent } from "react";

interface ProductListProps {
  products: Product[];
}

const ProductList: FunctionComponent<ProductListProps> = ({ products }) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="min-w-[170px] max-w-[170px]">
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
