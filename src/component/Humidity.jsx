import { Container } from "react-bootstrap";

const Humidity = (props) => {
  return (
    <Container className="bg-inf d-flex align-items-center justify-content-between mt-3">
      <p className="leftText">Humidity</p>
      <p className="leftText">{props.umidita} %</p>
    </Container>
  );
};

export default Humidity;
