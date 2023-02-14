const initState = "light";
export function themeReducer(state = initState, action) {
  switch (action.type) {
    case "light":
      return "light";
    case "dark":
      return "dark";
    default:
      return state;
  }
}

export function light() {
  return { type: "light" };
}

export function dark() {
  return { type: "dark" };
}
