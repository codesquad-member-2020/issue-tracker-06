import {
  setFilterQuery,
  clearFilter,
  setIsOpen,
  setAssignee,
  setLabel,
  setAuthor,
  setMilestone,
  setIssueList
} from '@/actions/issueListAction';
import { addIssueInfo } from '@/actions/issueInfoAction';
import axios from 'axios';

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('now : ', store.getState());
  console.log('action : ', action);
  const result = next(action);
  console.log('after : ', store.getState());
  console.log('\n');
  return result;
};

const filterQueryMiddleware = (store) => (dispatch) => (action) => {
  if (action.type === 'clearFilter') return dispatch(clearFilter());
  if (action.type === 'addIssueInfo') return dispatch(addIssueInfo(action.modal, action.payload));
  if (action.type === 'getIssueList')
    return axios.get(process.env.FILTER + `is_open=${true}`).then((response) => {
      console.log(response.data);
      dispatch(setIssueList(response.data));
    });

  const { filter, value } = action.payload;
  const { isOpen, Assignee, Label, Author, Milestone } = store.getState().issueListReducer;

  let query = store.getState().issueListReducer.filterQuery;

  const start = query.indexOf(filter);
  const end = query.indexOf(' ', start);

  const duplicatedFilter = query.substring(start, end + 1);

  start !== -1 ? (query = query.replace(duplicatedFilter, '')) : '';

  const newQuery = `${query}${filter}:${value} `;

  dispatch(setFilterQuery(newQuery));

  const state = store.getState().issueListReducer;
  const param = { ...state, [filter]: value };

  const send = ({ isOpen, Assignee, Label, Author, Milestone }) => {
    return axios
      .get(
        process.env.FILTER +
          `is_open=${isOpen}&assignee=${Assignee}&label=${Label}&author=${Author}&milestone=${Milestone}`
      )
      .then((response) => {
        console.log(response.data);
        dispatch(setIssueList(response.data));
      });
  };

  send(param);
};

export { loggerMiddleware, filterQueryMiddleware };
