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
        activeKey=""
        variant="underline"
      >
        <Nav.Item>
          <Link
            className={
              pathname === "/" ? "text-warning" : "text-decoration-none"
            }
            to="/"
          >
            Inicio
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className={
              pathname !== "/" ? "text-warning" : "text-decoration-none"
            }
            to={menuLink}
          >
            Menu
          </Link>
        </Nav.Item>
      </Nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
