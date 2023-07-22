export const updateTimes = (state, { payload }) => {
  return fetchAPI(payload); // eslint-disable-line
};

export const initialzeTimes = () => {
  return fetchAPI(new Date()); // eslint-disable-line
};
