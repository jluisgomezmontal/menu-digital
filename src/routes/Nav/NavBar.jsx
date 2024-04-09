import Nav from "react-bootstrap/Nav";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function NavBar() {
  let { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <Nav
        data-bs-theme="dark"
        className="justify-content-center bg-dark py-3 fixed-bottom "
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
              pathname === "/menu" ? "text-warning" : "text-decoration-none"
            }
            to="/menu"
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
