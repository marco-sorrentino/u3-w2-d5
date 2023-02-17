import { Container } from "react-bootstrap";

const Wind = (props) => {
  return (
    <Container className="bg-inf d-flex align-items-center justify-content-between mt-3">
      <p className="leftText">Wind</p>
      <p className="leftText">{props.vento} km/h</p>
    </Container>
  );
};

export default Wind;
