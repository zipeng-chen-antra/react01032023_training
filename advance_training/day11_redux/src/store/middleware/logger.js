const logger = (store) => (next) => (action) => {
    console.log("logger1",action)
    console.log("logger1",store.getState())
    let result = next(action);
    console.log("new state",store.getState());
  return result;
};

export default logger;

