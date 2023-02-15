const initState = 0;

export function counterReducer(state = initState, action) {
  // console.log(typeof action.payload);

  switch (action.type) {
    case "counter/increment":
      return state + 1;
    case "conuter/decrement":
      return state - 1;
    case "counter/reset":
      return initState;
    case "counter/addByAmount":
      return state + action.payload;
    default:
      return state;
  }
}

export function increment() {
  return { type: "counter/increment" };
}

export function decrement() {
  return { type: "conuter/decrement" };
}
export function reset() {
  return { type: "counter/reset" };
}

export function incrementByAmount(amount) {
  return { type: "counter/addByAmount", payload: amount };
}

export function incrementAsync(amount,time=1000){
  return async (dispatch)=>{
    setTimeout(()=>{
      dispatch(incrementByAmount(amount))
    },time)
  }
}