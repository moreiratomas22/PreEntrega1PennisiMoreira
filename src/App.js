// import Navbar from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Este es el saludo! desde mi App.js"} />}/>
        <Route path="/item/:pId" element={ <ItemDetailConteiner />}/>
        <Route path="/category/:cId" element={ <ItemListContainer />}/>
      </Routes>

      <ItemCount
        initial={1}
        stock={8}
        onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)}
      />
    </BrowserRouter>
  );
}

export default App;
