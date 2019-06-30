import { createStore, combineReducers } from "redux";
import { conutryListReducer } from "./reducers/countryList";
import { userSettingsReducer } from "./reducers/userSettings";

const inititalState = {
  userSettingsReducer: {
    language: "en-us"
  },
  conutryListReducer: {
    favourite: null,
    countryList: null,
    countryListFiltered: null,
    countryHash: null,
    selectedCountry: null,
    loading: true
  }
};
const reducers = combineReducers({
  conutryListReducer,
  userSettingsReducer
});

export const store = createStore(reducers, inititalState);
