export const filter = {
  byName: keyword => country =>
    country.Label.some(label =>
      label.Value.toLowerCase().includes(keyword.toLowerCase())
    )
};
