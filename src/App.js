// IMPORTANTEEEEEEEEEEEEEEEE
// GUARDARE LAVORO IN MODALITA MOBILE

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarComponent from "./component/NavBar";
import Weather from "./component/Weather";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Weather />
    </div>
  );
}

export default App;
