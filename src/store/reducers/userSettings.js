export const userSettingsReducer = (state = {}, action) => {
  const userSettings = {
    SET_LANGUAGE: () => ({
      language: action.value
    })
  };

  const selectedActionOutput = userSettings[action.type]
    ? userSettings[action.type]()
    : {};
  return { ...state, ...selectedActionOutput } || state;
};
