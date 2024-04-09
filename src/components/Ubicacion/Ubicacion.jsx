import { Button, Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./ubicacion.scss";

export const Ubicacion = () => {
  return (
    <Container className="text-white text-center py-5">
      <h3>Ubicacion</h3>
      <p className="mb-1">Estamos Ubicados en San Marcos Guererro.</p>
      <p className="mb-1">Calle Principal No.91</p>
      <p className="mb-4">Celular 744-123-4567</p>
      <div className="d-grid col-6 mx-auto">
        <Button variant="primary">Llamar</Button>
      </div>
      <div className="my-5 d-flex justify-content-center gap-5 display-3">
        <FaFacebookF className="facebook" />
        <FaInstagram className="instagram" />
        <FaWhatsapp className="whatsapp" />
      </div>
    </Container>
  );
};
