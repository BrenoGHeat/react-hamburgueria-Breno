import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

import styles from "./style.module.scss";

export const CartModal = ({ cartList , clearCart , removeFromCart , setIsOpen , children }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog">
         <div >
         <div >
            <h2>Carrinho de compras</h2>
            <button onClick={() => setIsOpen(false)}  aria-label="close" title="Fechar">
               {children}
               <MdClose size={21} />
            </button>
         </div>
         <div>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} removeFromCart={removeFromCart} />
               ))}
            </ul>
         </div>
         <div>
            <div>
               <span>Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button onClick={clearCart}>Remover todos</button>
         </div>
      </div>
      </div>
   );
};
