import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UsersPage } from "./pages/UsersPage";
import { BlogPostsPage } from "./pages/BlogPostsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "blog-posts",
        element: <BlogPostsPage />,
      },
    ],
  },
  {
    path: "users",
    element: <UsersPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
