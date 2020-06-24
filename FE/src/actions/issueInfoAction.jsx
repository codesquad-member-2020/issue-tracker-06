export const addIssueInfo = (modal, payload, isChecked) => {
  return {
    type: 'addIssueInfo',
    payload,
    modal,
    isChecked
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
