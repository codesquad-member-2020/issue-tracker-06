import { setFilterQuery, clearFilter } from '@/actions/issueListAction';
import { addIssueInfo } from '@/actions/issueInfoAction';
import { GET_START_ISSUE_LIST, setNewIssueList } from '@/actions/issueDataAction';
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
  if (action.type === GET_START_ISSUE_LIST) {
    return requestIssueList();
  }

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

  send(param);

  function requestIssueList() {
    return axios
      .get(`${process.env.FILTER}is_open=true`, {
        headers: {
          Authorization: 'Bearer jwtToken'
        }
      })
      .then((res) => {
        dispatch(setNewIssueList(res.data));
      });
  }
};

export { loggerMiddleware, filterQueryMiddleware };
