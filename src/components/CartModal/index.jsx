import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

import styles from "./style.module.scss";

export const CartModal = ({ cartList , clearCart , removeFromCart , setIsOpen , children }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={styles.modal}>
         <div className={styles.modalBox} >
         <div className={styles.modalHeader}>
            <h2>Carrinho de compras</h2>
            <button onClick={() => setIsOpen(false)}  aria-label="close" title="Fechar">
               {children}
               <MdClose size={21} />
            </button>
         </div>
         <div className={styles.modalProduct}>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} removeFromCart={removeFromCart} />
               ))}
            </ul>
         </div>
         <div>
            <div className={styles.modalPrice}>
               <span>Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button className="btn modal" onClick={clearCart}>Remover todos</button>
         </div>
      </div>
      </div>
   );
};
