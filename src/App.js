// import Navbar from './components';
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      {/* <ItemListContainer greeting={"Este es el saludo! desde mi App.js"} /> */}

      <ItemDetailConteiner />

      <ItemCount initial={1} stock={8} onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)}/>
    </div>
  );
}

export default App;
