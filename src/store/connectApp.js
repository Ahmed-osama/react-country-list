import { connect } from "react-redux";
import { ACTIONS } from "./constants";
import { createAction } from "./utils";
const mapStateToProps = state => {
  const {
    favourite,
    countryList,
    countryListFiltered,
    countryHash,
    selectedCountry,
    loading
  } = state.conutryListReducer;
  return {
    favourite,
    countryList,
    countryListFiltered,
    countryHash,
    selectedCountry,
    loading
  };
};

// Maps `dispatch` to `props`:
const mapDispatchToProps = dispatch => ({
  findCountry: id => dispatch(createAction(ACTIONS.FIND_COUNTRY, id)),
  addToFav: id => dispatch(createAction(ACTIONS.ADD_TO_FAV, id)),
  filterCountryList: arrayOfFilters =>
    dispatch(createAction(ACTIONS.FILTER_COUNTRY_LIST, arrayOfFilters)),
  setCountryList: list => dispatch(createAction(ACTIONS.SET_COUNTRY_LIST, list))
});

// Connect them:
const connectApp = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default connectApp;
