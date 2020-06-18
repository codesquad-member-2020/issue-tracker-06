const initialState = {
  filterQuery: '',
  isFiltered: false
};

const issueListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setFilterQuery':
      return {
        ...state,
        filterQuery: action.payload
      };
    case 'clearFilter':
      return {
        ...state,
        filterQuery: ''
      };

    default:
      return state;
  }
};

export { issueListReducer };
