const loggerMiddleware = (store) => (next) => (action) => {
  //   if (action.type === 'listCheck') return console.log('이건 안해!');

  console.log('now : ', store.getState());
  console.log('action : ', action);

  const result = next(action);

  console.log('after : ', store.getState());
  console.log('\n');

  return result;
};

export { loggerMiddleware };
