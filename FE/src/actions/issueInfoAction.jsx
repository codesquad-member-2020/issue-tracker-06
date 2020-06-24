export const addIssueInfo = (modal, payload) => {
  return {
    type: 'addIssueInfo',
    payload,
    modal
  };
};

export const deleteIssueInfo = (modal, payload) => {
  return {
    type: 'deleteIssueInfo',
    payload,
    modal
  };
};

export const addAssignee = (payload) => {
  return {
    type: 'addAssignee',
    payload
  };
};

export const addLabel = (payload) => {
  return {
    type: 'addLabel',
    payload
  };
};

export const addMilestone = (payload) => {
  return {
    type: 'addMilestone',
    payload
  };
};
