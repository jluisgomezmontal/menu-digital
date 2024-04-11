import Nav from "react-bootstrap/Nav";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBotton() {
  const { menuLink } = useSelector((state) => state.menu);

  console.log(menuLink);
  let { pathname } = useLocation();
  return (
    <>
      <Nav
        data-bs-theme="dark"
        className="justify-content-center bg-dark py-3 fixed-bottom border-top border-primary"
      >
        <Nav.Item>
          <Nav.Link to="/">
            <Link
              className={
                pathname === "/" ? "text-warning" : "text-decoration-none"
              }
              to="/"
            >
              Inicio
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to={menuLink}>
            <Link
              className={
                pathname !== "/" ? "text-warning" : "text-decoration-none"
              }
              to={menuLink}
            >
              Menu
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
