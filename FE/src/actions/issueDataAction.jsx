export const GET_START_ISSUE_LIST = 'GET_START_ISSUE_LIST';
export const SET_NEW_ISSUE_LIST = 'SET_NEW_ISSUE_LIST';

export const getStartIssueList = () => {
  return {
    type: GET_START_ISSUE_LIST
  };
};

export const setNewIssueList = (data) => {
  return {
    type: SET_NEW_ISSUE_LIST,
    data
  };
};
