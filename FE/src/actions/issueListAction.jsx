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

export const setIsOpen = (payload) => {
  return {
    type: 'setIsOpen',
    payload
  };
};

export const setAssignee = (payload) => {
  return {
    type: 'setAssignee',
    payload
  };
};

export const setLabel = (payload) => {
  return {
    type: 'setLabel',
    payload
  };
};

export const setAuthor = (payload) => {
  return {
    type: 'setAuthor',
    payload
  };
};

export const setMilestone = (payload) => {
  return {
    type: 'setMilestone',
    payload
  };
};

export const setIssueList = (payload) => {
  return {
    type: 'setIssueList',
    payload
  };
};

export const getIssueList = () => {
  return {
    type: 'getIssueList'
  };
};
