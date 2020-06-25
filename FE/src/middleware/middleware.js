import {
  setFilterQuery,
  clearFilter,
  setIsOpen,
  setAssignee,
  setLabel,
  setAuthor,
  setMilestone
} from '@/actions/issueListAction';
import { addIssueInfo } from '@/actions/issueInfoAction';
import { GET_START_ISSUE_LIST, setNewIssueList } from '@/actions/issueDataAction';
import axios from 'axios';
import { getCookie } from '@/lib/util/cookie';

const userInfo = {
  name: getCookie('user_name'),
  url: getCookie('user_profile'),
  id: getCookie('user_id')
};

const filterQueryMiddleware = (store) => (dispatch) => (action) => {
  if (action.type === 'clearFilter') return dispatch(clearFilter());
  if (action.type === 'addIssueInfo') return addIssueInfoList(store, action, dispatch);
  if (action.type === GET_START_ISSUE_LIST) {
    return requestIssueList(dispatch);
  }

  if (action.type === 'deleteIssueInfo') {
    return deleteInfoList(store, action, dispatch);
  }
  if (action.type === 'submitNewIssue') {
    return postNewIssue(action, store);
  }

  const { filter, value } = action.payload;

  makeFilterQuery(dispatch, store, filter, value);
  setFilterData(dispatch, filter, value);

  const state = store.getState().issueListReducer;
  const param = { ...state, [filter]: value };

  send(dispatch, param);
};

const postNewIssue = (action, store) => {
  const { assignees, labels, milestone } = store.getState().issueInfoReducer;
  console.log(userInfo.id, action.payload.title, action.payload.content, milestone, assignees, labels);
  // axios
  //   .post(
  //     process.env.NEWISSUE,
  //     {
  //       headers: {
  //         Authorization: 'Bearer jwtToken'
  //       }
  //     },
  //     {
  //       writer: userInfo.id,
  //       title: action.payload.title,
  //       content: action.payload.content,
  //       milestone: milestone,
  //       assignees: assignees,
  //       labels: labels
  //     }
  //   )
  //   .then((response) => {
  //     console.log(response);
  //   });
};

const addIssueInfoList = (store, action, dispatch) => {
  if (action.modal === 'assignee') {
    const list = store.getState().issueInfoReducer.assignees.concat(action.payload);
    dispatch(addIssueInfo('assignee', list));
  } else if (action.modal === 'label') {
    const list = store.getState().issueInfoReducer.labels.concat(action.payload);
    dispatch(addIssueInfo('label', list));
  } else if (action.modal === 'milestone') {
    dispatch(addIssueInfo('milestone', action.payload));
  }
};

const deleteInfoList = (store, action, dispatch) => {
  const { assignees, labels } = store.getState().issueInfoReducer;

  if (action.modal === 'assignee') {
    const deleteIndex = assignees.findIndex((item) => item.user_name === action.payload.user_name);
    assignees.splice(deleteIndex, 1);
  } else if (action.modal === 'label') {
    const deleteIndex = labels.findIndex((item) => item.title === action.payload.title);
    labels.splice(deleteIndex, 1);
  }
};

const makeFilterQuery = (dispatch, store, filter, value) => {
  let query = store.getState().issueListReducer.filterQuery;

  const start = query.indexOf(filter);
  const end = query.indexOf(' ', start);

  const duplicatedFilter = query.substring(start, end + 1);

  start !== -1 ? (query = query.replace(duplicatedFilter, '')) : '';

  const newQuery = `${query}${filter}:${value} `;

  dispatch(setFilterQuery(newQuery));
};

const send = (dispatch, { isOpen, Assignee, Label, Author, Milestone }) => {
  return axios
    .get(
      process.env.FILTER +
        encodeURI(`is_open=${isOpen}&assignee=${Assignee}&label=${Label}&author=${Author}&milestone=${Milestone}`),
      {
        headers: {
          Authorization: 'Bearer jwtToken'
        }
      }
    )
    .then((response) => {
      dispatch(setNewIssueList(response.data));
    });
};

const requestIssueList = (dispatch) => {
  return axios
    .get(`${process.env.FILTER}is_open=true`, {
      headers: {
        Authorization: 'Bearer jwtToken'
      }
    })
    .then((res) => {
      dispatch(setNewIssueList(res.data));
    });
};

const setFilterData = (dispatch, filter, value) => {
  const filterAction = {
    isOpen: () => {
      dispatch(setIsOpen(value));
    },
    Author: () => {
      dispatch(setAuthor(value));
    },
    Label: () => {
      dispatch(setLabel(value));
    },
    Milestone: () => {
      dispatch(setMilestone(value));
    },
    Assignee: () => {
      dispatch(setAssignee(value));
    }
  };

  return filterAction[filter]();
};

export { filterQueryMiddleware };
