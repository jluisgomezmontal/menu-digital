/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenuLink } from "../../redux/slices/menuSlice";

function CardComponent({
  img = "https://img.freepik.com/vector-gratis/g-purple-logo-business-marca-identidad-diseno-vector-ilustracion_1142-13252.jpg",
  title,
  text,
  link = "tel:+527444292283",
  btn = "Llamar",
}) {
  const dispatch = useDispatch();

  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: "15rem" }}>
      <Card.Header className="bg-dark text-white">
        <Card.Img variant="top" src={img} />
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <div className="d-grid mx-auto">
          <Link
            onClick={() => {
              dispatch(setMenuLink(`/${link}`));
            }}
            to={link}
            className="btn btn-primary"
            role="button"
          >
            {btn}
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
