import { Container } from "react-bootstrap";

const Temperature = (props) => {
  return (
    <Container className=" d-flex align-items-center justify-content-between p-0">
      <Container className="bg-inf square d-flex flex-column align-items-center justify-content-center">
        <p className="m-0">Max</p>
        <p className="leftText">{props.maxTemp} ° C</p>
      </Container>
      <Container className="bg-inf square d-flex align-items-center justify-content-center mx-4">
        <img src={props.icon} alt="" />
      </Container>
      <Container className="bg-inf square d-flex flex-column align-items-center justify-content-center">
        <p className="m-0">Min</p>
        <p className="leftText">{props.minTemp} ° C</p>
      </Container>
    </Container>
  );
};

export default Temperature;
