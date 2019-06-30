export const conutryListReducer = (state = {}, action) => {
  debugger;
  const countryListActions = {
    FIND_COUNTRY: () => ({
      selectedCountry: state.countryHash[action.value]
    }),
    ADD_TO_FAV: () => ({
      favourite: state.favourite.push(state.countryHash[action.value])
    }),
    FILTER_COUNTRY_LIST: () => ({
      countryListFiltered: state.countryList.filter(country =>
        action.value.every(filter => filter(country))
      )
    }),
    SET_COUNTRY_LIST: () => ({
      countryList: action.value,
      countryHash: action.value.reduce((acc, curr) => {
        acc[curr.Code] = curr;
        return acc;
      }, {}),
      loading: false
    })
  };

  const selectedActionOutput = countryListActions[action.type]
    ? countryListActions[action.type]()
    : {};
  return { ...state, ...selectedActionOutput } || state;
};
