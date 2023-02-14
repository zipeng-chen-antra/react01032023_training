import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import { dark, light } from "./store/slices/themeSlice";

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  function handleToggleTheme() {
    dispatch(theme === "light" ? dark() : light());
  }

  return (
    <div className={`App ${theme}-theme`}>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
      <Counter />
      <Counter2 />
    </div>
  );
}

export default App;
