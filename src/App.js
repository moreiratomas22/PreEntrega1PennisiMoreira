import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Este es el saludo! desde mi App.js"} />}/>
        <Route path="/item/:pId" element={ <ItemDetailConteiner />}/>
        <Route path="/category/:cId" element={ <ItemListContainer />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
