import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/NavBar/NavBar";
import CardComponent from "../../components/Card/Card";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h1>San Marcos Digital</h1>
        <p>
          Este proyecto tiene como objetivo digitalizar todos los negocios
          locales del municipio de San Marcos, Guerrero. Asi los negocios
          locales podran registrar sus servicios, productos y horarios de
          atención.
        </p>
      </div>

      <Container fluid>
        <h2 className="text-info">Restaurantes</h2>
        <Row>
          <Col>
            <CardComponent
              title="Titulo Generico"
              text="¡Ven y Conosenos!"
              btn="Ir"
              link="generico"
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
        <Row>
          <Col>
            <CardComponent
              title="Titulo Generico"
              text="¡Ven y Conosenos!"
              btn="Ir"
              link="generico"
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
      <Container className="mt-5" fluid>
        <h2 className="text-info">Servicios</h2>
        <Row>
          <Col>
            <CardComponent
              title="Titulo Generico"
              text="¡Ven y Conosenos!"
              btn="Ir"
              link="generico"
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
        <Row>
          <Col>
            <CardComponent
              title="Titulo Generico"
              text="¡Ven y Conosenos!"
              btn="Ir"
              link="generico"
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
      <Container className="mt-5" fluid>
        <h2 className="text-info">Farmacias</h2>
        <Row>
          <Col>
            <CardComponent
              title="Titulo Generico"
              text="¡Ven y Conosenos!"
              btn="Ir"
              link="generico"
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
        <Row>
          <Col>
            <CardComponent
              title="Titulo Generico"
              text="¡Ven y Conosenos!"
              btn="Ir"
              link="generico"
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
      <Container className="mt-5" fluid>
        <h2 className="text-info">Consultorios</h2>
        <Row>
          <Col>
            <CardComponent
              title="Titulo Generico"
              text="¡Ven y Conosenos!"
              btn="Ir"
              link="generico"
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
        <Row>
          <Col>
            <CardComponent
              title="Titulo Generico"
              text="¡Ven y Conosenos!"
              btn="Ir"
              link="generico"
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
      <div className="text-white container py-5 text-center">
        <CardComponent
          img="https://jose-luis-gomez-dev.netlify.app/assets/jluis-c3308959.png"
          title="Creado por Jose Luis Gomez Montalvan"
          text="¡Contáctame y mejora la experiencia de tus clientes con soluciones
          digitales innovadoras!"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
