const initialState = {
  filterQuery: '',
  isOpen: true,
  Assignee: '',
  Label: '',
  Author: '',
  Milestone: '',
  isFiltered: false,
  issueList: []
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
    case 'setIsOpen':
      return {
        ...state,
        isOpen: action.payload
      };
    case 'setAssignee':
      return {
        ...state,
        Assignee: action.payload
      };
    case 'setLabel':
      return {
        ...state,
        Label: action.payload
      };
    case 'setAuthor':
      return {
        ...state,
        Author: action.payload
      };
    case 'setMilestone':
      return {
        ...state,
        Milestone: action.payload
      };
    case 'setIssueList':
      return {
        ...state,
        issueList: action.payload
      };
    case 'getIssueList':
      return {
        ...state
      };
    default:
      return state;
  }
};

export { issueListReducer };
