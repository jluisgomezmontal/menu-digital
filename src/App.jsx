import { Header } from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/Nav/NavBar";
import { Ubicacion } from "./components/Ubicacion/Ubicacion";

function App() {
  return (
    <div className="bg-dark">
      <Header />
      <Menu />
      <Ubicacion />
      <NavBar />
    </div>
  );
}

export default App;
