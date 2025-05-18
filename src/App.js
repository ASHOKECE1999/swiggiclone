// Nested
  import React,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
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
import LogContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const [loggeduserName] = useState("DefaultUser");
  return (
    <Provider store={appStore}>
    <LogContext.Provider value={{logedInUser:loggeduserName}}>
      <div className="app">
        <LogContext.Provider value={{logedInUser:"ashok"}}>
        <Header /></LogContext.Provider>
        <Outlet />
      </div>
    </LogContext.Provider>
    </Provider>
  );
   
};

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
