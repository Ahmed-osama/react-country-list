import React, { Component } from "react";
import countryList from "./models/data";
import CountryListItem from "./components/CountryListItem";
import CountrySearch from "./components/CountrySearch";
import connectApp from "./store/connectApp";

class App extends Component {
  componentDidMount() {
    setTimeout(this.props.setCountryList.bind(this, countryList), 1000);
  }
  render() {
    const {
      loading,
      countryListFiltered,
      findCountry,
      countryList,
      selectedCountry
    } = this.props;
    const viewList = countryListFiltered || countryList;
    return (
      <div className="App">
        <h1>country list App</h1>
        <CountrySearch />
        {selectedCountry && <CountryListItem country={selectedCountry} mega />}
        {loading && <p> Loading....</p>}
        {!loading &&
          viewList.map(country => (
            <CountryListItem
              selectCountry={findCountry}
              key={country.Code}
              country={country}
            />
          ))}
      </div>
    );
  }
}

export default connectApp(App);
