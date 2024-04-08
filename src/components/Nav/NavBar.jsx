import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <>
      <Nav
        data-bs-theme="dark"
        className="justify-content-center bg-dark py-3 fixed-bottom "
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/home">Menu</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/menu">Ubicacion</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/menu2">Contacto</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavBar;
