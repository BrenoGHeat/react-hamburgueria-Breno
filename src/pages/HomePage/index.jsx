import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
   const localCartList = JSON.parse(localStorage.getItem("@MYCARTLIST"));
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(localCartList.length > 0 ? localCartList : []);
   const [total, setTotal] = useState(0);
   const [isOpen, setIsOpen] = useState(false);
   const [totalItem, setTotalItem] = useState(0);
  
  
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
         const savedCartList = JSON.parse(localStorage.getItem("@MYCARTLIST"));
         if (savedCartList) {
            setCartList(savedCartList);
      }
   }, []);

  
   // adição, exclusão, e exclusão geral do carrinho
   const addToCart = (product) => {
      const itemCart = cartList.find(item => item.id === product.id);
      if( itemCart ){
            alert("Item já adicionado no carrinho");
            return ;
      } 
      setCartList([...cartList, product]);

   };

   const removeFromCart = (productId) => {
      const newData = cartList.filter(item => item.id !== productId);
      setCartList(newData);
   };

   const clearCart = () => {
      setCartList([]);
      setIsOpen(false);
   };

   useEffect(() => {
      localStorage.setItem("@MYCARTLIST" , JSON.stringify(cartList));
   } , [cartList]);


   useEffect(() =>{
     
      const lengthCart = cartList.length
         setTotalItem(lengthCart);

      const totalPrice = cartList.reduce ((acumulador,item) =>
         acumulador + item.price , 0 );
         setTotal(totalPrice);
   } , [cartList]);

   // renderizações condições e o estado para exibir ou não o carrinho

   const openModal = () => {
      setIsOpen(!isOpen);
   };

   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header openModal={openModal} totalItem={totalItem} />
         <main>
            <ProductList productList={productList} addToCart={addToCart} />
            {isOpen ? <CartModal cartList={cartList} clearCart={clearCart} removeFromCart={removeFromCart} setIsOpen={setIsOpen} /> : null }
         </main>
      </>
   );
};
