import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <>
      <Nav
        data-bs-theme="dark"
        className="justify-content-center bg-dark py-3 fixed-bottom "
        activeKey="/"
        variant="underline"
      >
        <Nav.Item>
          <Nav.Link>Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Menu</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavBar;
