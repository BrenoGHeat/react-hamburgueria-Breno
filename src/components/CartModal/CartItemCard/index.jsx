import { MdDelete } from "react-icons/md";


export const CartItemCard = ({ product , removeFromCart }) => {
   return (
      <li>
         <div>
            <img src={product.img} alt={product.name} />
           
           <div className="mini products">
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
            </div>
           

         </div>
         <button onClick={() => removeFromCart(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
