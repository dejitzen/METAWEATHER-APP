import "./App.css";
import LocationInfo from "./screens/LocationInfo/LocationInfo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Weather from "./screens/Weather/Weather";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/weather/:woeid" element={<Weather />} />
        <Route path="/" element={<LocationInfo />} />
      </Routes>
    </Router>

  );
}

export default App;
