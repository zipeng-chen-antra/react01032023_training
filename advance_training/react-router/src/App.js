import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About, { action } from "./pages/About";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Narbar from "./pages/Narbar";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

function Foo() {
  return <div>foo</div>;
}
function Bar() {
  return <div>bar</div>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Narbar />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} >
        <Route path="foo" element={<Foo />} />
        <Route path="bar" element={<Bar />} />
      </Route>
      <Route path="posts" element={<Posts />}>
        <Route path=":id" element={<Post />}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="about" element={<About />}>
    //       <Route path="foo" element={<Foo />} />
    //       <Route path="bar" element={<Bar />} />
    //     </Route>
    //     <Route path="posts" element={<Posts />}>
    //       <Route path=":id" element={<Post />}/>
    //     </Route>
    //     <Route path="*" element={<ErrorPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
