// Nested
  import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet, RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import "../index.css";

import Header from "./components/Header";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import RestroMenuCard from "./components/RestroMenuCard";
// import GroceryShop from "./components/GroceryShop";

const GroceryShop=lazy(()=>import("./components/GroceryShop"))

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet/>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/restorents/:id", element: <RestroMenuCard /> },{ path: "/grocery", element:<Suspense fallback={<h1>Loading.............</h1>}><GroceryShop /></Suspense>  },{ path: "/about", element: <About /> },{ path: "/", element: <Body /> },{ path: "/contactus", element: <ContactUs /> },{ path: "/cart", element: <Cart /> }],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
