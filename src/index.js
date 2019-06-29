import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import countryList from "./data";

function App() {
  const initialState = countryList[0];
  const [country, setCountry] = React.useState(initialState);
  const handleClick = e => {
    const id = e.target.parentNode.getAttribute("data-ccode");
    const selectedCountry = countryList.filter(country => {
      return country.Code == id;
    })[0];
    setCountry(selectedCountry);
  };

  return (
    <div className="App">
      <h2>Selected Country</h2>
      <div>
        <span>Country Name: {country && country.Label[0].Value}</span>
        <br />
        <span>Code: {country && country.Code}</span>
      </div>

      <h2>Country List By Code</h2>
      <ul className="list">
        {countryList.map((country, idx) => {
          return (
            <li key={idx} className="listName" data-ccode={country.Code}>
              {country.Label[0].Value}
              <span className="cta-button" onClick={handleClick}>
                Click Here for more details
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
