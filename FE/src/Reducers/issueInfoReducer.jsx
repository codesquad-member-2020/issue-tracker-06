const initialState = {
  assignees: [],
  labels: [],
  milestone: ''
};

const issueInfoReducer = (state = initialState, action) => {
  switch (action.modal) {
    case 'assignee':
      return {
        ...state,
        assignees: state.assignees.concat(action.payload)
      };
    case 'label':
      return {
        ...state,
        labels: state.labels.concat(action.payload)
      };
    case 'milestone':
      return {
        ...state,
        milestone: action.payload
      };
    default:
      return state;
  }
};

export { issueInfoReducer };
