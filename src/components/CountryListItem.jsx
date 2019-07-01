import React from "react";
import { connect } from "react-redux";

const CountryListItem = ({ country, language, selectCountry, mega }) => {
  const label = country.Label.find(item => item.Locale == language);
  return (
    <div className={`countryListItem ${mega ? "countryListItem--mega" : ""}`}>
      <img
        className="countryListItem__img"
        src={`https://www.countryflags.io/${country.Code.toLowerCase()}/flat/${
          mega ? 64 : 24
        }.png`}
      />
      <div className="countryListItem__content">
        <strong>{label.Value}</strong>
        <p>{country.DialCode}</p>
      </div>
      {selectCountry && (
        <button
          className="countryListItem__cta"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            selectCountry(country.Code);
          }}
        >
          select country
        </button>
      )}
    </div>
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
