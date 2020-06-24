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
        assignees: state.assignees.concat({
          user_name: action.payload.user_name,
          user_image: action.payload.user_image,
          isChecked: action.isChecked
        })
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
