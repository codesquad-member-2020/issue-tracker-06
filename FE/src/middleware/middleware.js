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

const filterQueryMiddleware = (store) => (dispatch) => (action) => {
  if (action.type === 'clearFilter') return dispatch(clearFilter());
  if (action.type === 'addIssueInfo') return dispatch(addIssueInfo(action.modal, action.payload, action.isChecked));
  if (action.type === GET_START_ISSUE_LIST) {
    return requestIssueList(dispatch);
  }

  const { filter, value } = action.payload;

  makeFilterQuery(dispatch, store, filter, value);
  setFilterData(dispatch, filter, value);

  const state = store.getState().issueListReducer;
  const param = { ...state, [filter]: value };

  send(dispatch, param);
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
        `is_open=${isOpen}&assignee=${Assignee}&label=${Label}&author=${Author}&milestone=${Milestone}`,
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
