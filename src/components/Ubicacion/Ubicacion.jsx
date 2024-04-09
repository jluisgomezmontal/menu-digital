import { Container } from "react-bootstrap";
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
        <a href="tel:+527444292283" className="btn btn-primary" role="button">
          Llamar
        </a>
      </div>
      <div className="my-5 d-flex justify-content-center gap-5 display-3">
        <a target="_blank" href="https://www.facebook.com/cloud220690/">
          <FaFacebookF className="facebook" />
        </a>
        <a target="_blank" href="https://www.instagram.com/jluismontalvan/">
          <FaInstagram className="instagram" />
        </a>
        <a target="_blank" href="https://wa.me/527444292283">
          <FaWhatsapp className="whatsapp" />
        </a>
      </div>
    </Container>
  );
};
