import { Button, ButtonGroup, Container} from "react-bootstrap";
import { Header } from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/Nav/NavBar";

function App() {
  return (
    <div className="bg-dark">
      <Header />
      <Menu />
      <Container className="text-white text-center">
        <h3>Ubicacion</h3>
        <p className="mb-1">Estamos Ubicados en San Marcos Guererro.</p>
        <p className="mb-3">Calle Principal No.91</p>
        <ButtonGroup className="mb-2">
          <Button variant="primary">Llamar</Button>
          <Button variant="success">Whatsapp</Button>
        </ButtonGroup>
      </Container>
      <NavBar />
    </div>
  );
}

export default App;
