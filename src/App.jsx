import React from "react";
import Head from "./component/Head";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="">
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
