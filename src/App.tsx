import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Countries } from "./Countries/Countries";
import { CountryDetails } from "./Countries/CountryDetails";

function App() {
  return (
    <div>
      <header className="App-header">COUNTRIES</header>
      <BrowserRouter>
        <Routes>
          <Route element={<Countries />} path="/" />
          <Route element={<CountryDetails />} path="/country/:countryCode" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
