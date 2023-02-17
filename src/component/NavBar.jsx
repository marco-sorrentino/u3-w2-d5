import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBarComponent = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="https://brands.home-assistant.io/_/openweathermap/logo.png">
            <img
              id="logo"
              src="https://brands.home-assistant.io/_/openweathermap/logo.png"
              alt=""
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
