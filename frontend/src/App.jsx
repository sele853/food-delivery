import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { index: "/menu", element: <Menu /> },
      { index: "/about", element: <About /> },
      { index: "/contact", element: <Contact /> },
      { index: "/cart", element: <Cart /> },
      { index: "/order", element: <Order /> },
      { index: "/place-order", element: <PlaceOrder /> },
      { index: "/product/:productId", element: <Product /> },
      { index: "/login", element: <Login /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
