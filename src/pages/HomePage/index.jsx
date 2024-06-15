import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
  
   // useEffect montagem - carrega os produtos da API e joga em productList
      useEffect(() => {
         const getProducts = async () => {
            const response = await fetch ("https://hamburgueria-kenzie-json-serve.herokuapp.com/products");
            const json = await response.json();
               setProductList(json);
         }
               getProducts();
      }, []);

   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
      useEffect(() => {
            localStorage.setItem("@MYPRODUCTLIST" , JSON.stringify(productList));
      } , [productList] );

      useEffect(() => {
         localStorage.setItem('@MYCARTLIST', JSON.stringify(cartList));
      }, [cartList]);
   


   // adição, exclusão, e exclusão geral do carrinho



   const clearCart = () => {
      setCartList([]);
   };

   const totalPrice = cartList.reduce ((acumulador,item) =>
      acumulador + item.price * item.quantity, 0 );


   // renderizações condições e o estado para exibir ou não o carrinho


   // filtro de busca



   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header />
         <main>
            <ProductList productList={productList} />
            <CartModal cartList={cartList} />
         </main>
      </>
   );
};
