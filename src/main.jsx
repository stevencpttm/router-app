import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Post from "./Post.jsx";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        loader: async (data) => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + data.params.id,
          );
          const post = await response.json();

          return {
            id: data.params.id,
            post: post,
          };
        },
        element: <Post />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={myRouter}></RouterProvider>,
);
