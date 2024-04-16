import Nav from "react-bootstrap/Nav";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdHomeFilled } from "react-icons/md";
import { PiBrowsersFill } from "react-icons/pi";

export default function NavBotton() {
  const { menuLink } = useSelector((state) => state.menu);

  console.log(menuLink);
  let { pathname } = useLocation();
  return (
    <>
      <Nav
        data-bs-theme="dark"
        className="justify-content-center bg-dark fixed-bottom border-top border-primary"
      >
        <Nav.Item>
          <Nav.Link to="/">
            <Link
              className={
                pathname === "/" ? "text-warning" : "text-decoration-none"
              }
              to="/"
            >
              <div className="d-flex flex-column align-items-center">
                <MdHomeFilled className="fs-3" />
                Inicio
              </div>
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
              <div className="d-flex flex-column align-items-center">
                <PiBrowsersFill className="fs-3" />
                Menu
              </div>
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
