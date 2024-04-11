import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/NavBar/NavBar";
import CardComponent from "../../components/Card/Card";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="text-white container py-5 text-center">
        <CardComponent
          title="Creado por Jose Luis Gomez Montalvan"
          text="¡Contáctame y mejora la experiencia de tus clientes con soluciones
          digitales innovadoras!"
        />
      </div>
      <Container>
        <Row>
          <Col>
            <CardComponent
              title="Nelly's Frappe"
              text="¡Ven y Conosenos!"
              btn="Ir"
              link="nelly"
            />
          </Col>
          <Col>
            <CardComponent
              title="Menu Digital"
              text="¡Ven y Conosenos!"
              btn="Ir"
              link="menu"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
