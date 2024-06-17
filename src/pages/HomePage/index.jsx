import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [isOpen, setIsOpen] = useState(false);
  
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
         const savedCartList = JSON.parse(localStorage.getItem('@MYCARTLIST'));
         if (savedCartList) {
            setCartList(savedCartList);
      }
   }, []);

  
   // adição, exclusão, e exclusão geral do carrinho
   const addToCart = (product) => {
      setCartList(prevCartList => {
         const itemInCart = prevCartList.find(item => item.id === product.id);

         if (itemInCart) {
            return prevCartList.map(item =>
               item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            );
         } else {
            return [...prevCartList, { ...product, quantity: 1 }];
         }
      });
   };

   const removeFromCart = (productId) => {
      setCartList(prevCartList => prevCartList.filter(item => item.id !== productId));
   };

   const clearCart = () => {
      setCartList([]);
   };

   const totalPrice = cartList.reduce ((acumulador,item) =>
      acumulador + item.price , 0 );


   // renderizações condições e o estado para exibir ou não o carrinho

   const openModal = () => {
      setIsOpen(prevIsOpen => !prevIsOpen);
   };


   // filtro de busca



   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header />
         <main>
            <ProductList productList={productList} addToCart={addToCart} setIsOpen={setIsOpen} />
            {isOpen ? <CartModal cartList={cartList} clearCart={clearCart} removeFromCart={removeFromCart} setIsOpen={setIsOpen} /> : null }
            
         </main>
      </>
   );
};
