import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./src/Header";
import Footer from "./src/Footer";
import Home from "./src/pages/Home";
import Search from "./src/pages/Search";
import Contact from "./src/pages/Contact";
import Cart from './src/pages/Cart'
import Error from './src/pages/Error'
import ResDetails from "./src/pages/ResDetails";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path: "resdetails/:resId",
        element: <ResDetails/>
      }
    ],
    errorElement: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
