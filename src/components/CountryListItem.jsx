import React from "react";
import { connect } from "react-redux";

const CountryListItem = ({ country, language, selectCountry, mega }) => {
  const label = country.Label.find(item => item.Locale == language);
  return (
    <li>
      <img
        src={`https://www.countryflags.io/${country.Code.toLowerCase()}/flat/${
          mega ? 64 : 24
        }.png`}
      />
      <div>
        <strong>{label.Value}</strong>
        <p>{country.DialCode}</p>
      </div>
      {selectCountry && (
        <button onClick={() => selectCountry(country.Code)}>
          select country
        </button>
      )}
    </li>
  );
};

const mapStateToProps = state => {
  const { language } = state.userSettingsReducer;
  return {
    language
  };
};

export default connect(
  mapStateToProps,
  null
)(CountryListItem);
