import "../styles/app.scss";

import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

// import useRoutesWrapper from "../hooks/useRoutesWrapper";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
// import { routes } from "../utils/routes";

export const AppContext = createContext();

function App() {
  // const routes = useRoutesWrapper();

  return (
    // <Layout>{routes}</Layout>
    <AppContext.Provider value={"abc"}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element="about" />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
    // <>{routes}</>
  );
}

export default App;

/*<Routes>
    <Route path="/" element={<Home pizzas={pizzas} />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/about" element="about" />
    <Route path="*" element="NOT FOUND" />
  </Routes> */
