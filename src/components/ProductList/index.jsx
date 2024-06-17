import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList , setIsOpen }) => {
   return (
      <ul className="container">
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} setIsOpen={setIsOpen} />
         ))}
      </ul>
   );
};
