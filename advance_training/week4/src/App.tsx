import React from 'react';
import Foo from './components/Foo/Foo';
import Like from './components/Like/Like';
import SassTraining from './components/SassTraining';
import Todolist from './components/Todolist';
import "./ts-training";

function App() {
  return (
    <div className="App">
      {/* <Todolist /> */}
      {/* <SassTraining/> */}
      <Foo name="brandon" />
      <Like />
    </div>
  );
}

export default App;
