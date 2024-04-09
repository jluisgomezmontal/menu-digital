import { Header } from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { Ubicacion } from "./components/Ubicacion/Ubicacion";

function App() {
  return (
    <div className="bg-dark">
      <Header />
      <Menu />
      <Ubicacion />
    </div>
  );
}

export default App;
