import { GET_START_ISSUE_LIST, SET_NEW_ISSUE_LIST } from '@/actions/issueDataAction';

const initialState = {
  overviews: [],
  number_of_label: 0,
  number_of_milestone: 0,
  number_of_issue: 0
};

const issueDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_START_ISSUE_LIST:
      return { ...state };

    case SET_NEW_ISSUE_LIST:
      const { overviews, number_of_issue, number_of_label, number_of_milestone } = action.data;
      return {
        ...state,
        overviews: [...overviews],
        number_of_issue,
        number_of_label,
        number_of_milestone
      };
    default:
      return state;
  }
};

export default issueDataReducer;
