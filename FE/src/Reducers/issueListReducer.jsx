const initialState = {
  isListChecked: false
};

const issueListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'listCheck':
      return {
        ...state,
        isListChecked: action.payload
      };
    default:
      return state;
  }
};

export { issueListReducer };
