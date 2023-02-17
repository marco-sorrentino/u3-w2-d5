import { Container } from "react-bootstrap";

const Pressure = (props) => {
  return (
    <Container className="bg-inf d-flex align-items-center justify-content-between mt-3">
      <p className="leftText">Pressure</p>
      <p className="leftText">{props.pressione}</p>
    </Container>
  );
};

export default Pressure;
