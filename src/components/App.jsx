import "../styles/app.scss";

import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// import useRoutesWrapper from "../hooks/useRoutesWrapper";
import Layout from "./Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
// import { routes } from "../utils/routes";

import { useDispatch, useSelector } from "react-redux";
import { setPizzas } from "../store/slices/pizzasSlice";

export const AppContext = createContext();

function App() {
  const activeCategory = useSelector((state) => state.filter.category);
  const { type, isUp } = useSelector((state) => state.filter.sort);
  const pizzas = useSelector((state) => state.pizzas.items);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const store = {
    pizzas,
    setPizzas,
    loading,
    setLoading,
    search,
    setSearch,
  };

  // const [isUp, setIsUp] = useState(true);

  useEffect(() => {
    const category = activeCategory === 0 ? "" : activeCategory;
    const sort = type === 0 ? "rating" : type === 1 ? "price" : "title";
    const order = isUp === true ? "desc" : "asc";
    fetch(
      `https://67dab57735c87309f52da5b5.mockapi.io/items?title=${search}&category=${category}&sortBy=${sort}&order=${order}`
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error(
            "Похоже таких пицц у нас еще нет, но выбор интересный"
          );
        }
      })
      .then((data) => {
        dispatch(setPizzas(data));
        console.log(data);
      })
      .finally(() => setLoading(false))
      .catch((err) => {
        setPizzas([]);
        console.log(err);
        alert(`Ошибка запроса: ${err.message}`);
      });
  }, [activeCategory, type, isUp, search]);
  // const routes = useRoutesWrapper();

  return (
    // <Layout>{routes}</Layout>
    <AppContext.Provider value={store}>
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
