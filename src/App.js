// import Navbar from './components';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <ItemListContainer greeting={"Este es el saludo! desde mi App.js"} />
    </div>
  );
}

export default App;
