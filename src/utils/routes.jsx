import Layout from "../components/Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

import { HOME_ROUTE, CART_ROUTE } from "./paths";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: HOME_ROUTE,
        element: <Home pizzas={[1, 2, 3]} loading={true} />,
      },
      {
        path: CART_ROUTE,
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
