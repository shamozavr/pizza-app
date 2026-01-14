import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import { AppContext } from "../components/App";
import { useContext } from "react";

// pizzas={pizzasData}
// setPizzas={setPizzas}
// loading={loading}
// setLoading={setLoading}
// active={active}
// setActive={(ind) => setActive(ind)}

function Home() {
  const { pizzas, loading } = useContext(AppContext);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading ? (
          <div>
            {[...new Array(10)].map((_, ind) => (
              <Skeleton key={ind} />
            ))}
          </div>
        ) : pizzas.length > 0 ? (
          pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
        ) : (
          "Нет пицц удовлетворяющих запросу"
        )}
      </div>
    </>
  );
}

export default Home;
