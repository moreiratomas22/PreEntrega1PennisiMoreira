import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailContainer";
import Footer from "./components/Footer";
import CartContainer from "./components/CartContainer/CartContainer";
import CartProvider from "./components/CartContext/CartContext";
import "./utils/firebase"
import PurchasedCart from "./components/PurchasedCart/PurchasedCart";


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Este es el saludo! desde mi App.js"} />}/>
        <Route path="/item/:pId" element={ <ItemDetailConteiner />}/>
        <Route path="/category/:cId" element={ <ItemListContainer />}/>
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/purchase/:ticketId" element={<PurchasedCart />} />
      </Routes>

    </CartProvider>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
