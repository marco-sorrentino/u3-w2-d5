// IMPORTANTEEEEEEEEEEEEEEEE
// GUARDARE LAVORO IN MODALITA MOBILE

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import City from "./City";
import Humidity from "./Humidity";
import Pressure from "./Pressure";
import Temperature from "./Temperature";
import Wind from "./Wind";

const Weather = (props) => {
  // Creo state per poi salvarci dati
  const [city, setCity] = useState("Milan");
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});

  // Metto funzione del fetch dentro il component
  useEffect(() => {
    getData();
  }, [city]);

  // Faccio Fetch per prendere i dati da API
  const getData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=66b0f4b97869d304b4ea8c90ce1fe4bf&units=metric`
      );

      if (res.ok) {
        const data = await res.json();
        //Salvo dati nello stato inizializzato prima
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Creo funzione per inpur bar
  const search = (e) => {
    // Gli dico di azionari al click del tasto Enter
    if (e.key === "Enter") {
      // Prendo il valore che digito nell'input e lo salvo nello stato
      setCity(e.target.value);
      // All'enter l'input si resetta
      setInputText("");
    }
  };

  return (
    <Container fluid className="bg-image">
      <Row>
        <Col md={3}>
          <Container className="mt-5">
            <h1 id="titolo">Find your city</h1>
            <input
              type="text"
              placeholder="Write here..."
              className="input"
              // Gli dico che il valore corrisponde allo stato inizializzato
              value={inputText}
              // Prendo il valore al cambiare dei tasti digitati e lo salvo nello state
              onChange={(e) => setInputText(e.target.value)}
              // Al clik dell'Enter richiamo funzione search
              onKeyDown={search}
            />

            <City city={data.name} temp={data.main?.temp.toFixed()} />
            <Temperature
              maxTemp={data.main?.temp_max.toFixed()}
              icon={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              minTemp={data.main?.temp_min.toFixed()}
            />
            <Humidity umidita={data.main?.humidity} />
            <Wind vento={data.wind?.speed} />
            <Pressure pressione={data.main?.pressure} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
