const initState = 0;

export function counterReducer(state = initState, action) {
  // console.log(typeof action.payload);

  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    case "reset":
      return initState;
    case "addByAmount":
      return state + action.payload;
    default:
      return state;
  }
}

export function increment() {
  return { type: "add" };
}

export function decrement() {
  return { type: "minus" };
}
export function reset() {
  return { type: "reset" };
}

export function incrementByAmount(amount) {
  return { type: "addByAmount", payload: amount };
}
