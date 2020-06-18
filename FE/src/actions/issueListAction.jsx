export const setFilterQuery = (payload) => {
  return {
    type: 'setFilterQuery',
    payload
  };
};

export const clearFilter = () => {
  return {
    type: 'clearFilter'
  };
};
