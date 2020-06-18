import { setFilterQuery, clearFilter } from '@/actions/issueListAction';

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

  const { filter, value } = action.payload;

  let query = store.getState().issueListReducer.filterQuery;

  if (action.payload.filter !== 'Label') {
    const start = query.indexOf(filter);
    const end = query.indexOf(' ', start);

    const duplicatedFilter = query.substring(start, end + 1);

    start !== -1 ? (query = query.replace(duplicatedFilter, '')) : '';
  }

  const newQuery = `${query}${filter}:${value} `;

  dispatch(setFilterQuery(newQuery));
};

export { loggerMiddleware, filterQueryMiddleware };
