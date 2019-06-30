import React from "react";
import { connect } from "react-redux";
import { filter } from "../utils";
import { ACTIONS } from "../store/constants";
import { createAction } from "../store/utils";

const CountrySearch = props => (
  <div className="countrySearch">
    <input
      type="text"
      onChange={e => props.filterCountryList([filter.byName(e.target.value)])}
      type="search"
      placeholder="search Country"
    />
  </div>
);

const mapStateToProps = state => {
  const { language } = state.userSettingsReducer;
  const { countryListFiltered } = state.conutryListReducer;
  return {
    language,
    countryListFiltered
  };
};

const mapDispatchToProps = dispatch => ({
  filterCountryList: arrayOfFilters =>
    dispatch(createAction(ACTIONS.FILTER_COUNTRY_LIST, arrayOfFilters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountrySearch);
