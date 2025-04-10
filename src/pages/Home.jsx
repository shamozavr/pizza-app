import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import { useEffect, useState } from "react";

// pizzas={pizzasData}
// setPizzas={setPizzas}
// loading={loading}
// setLoading={setLoading}
// active={active}
// setActive={(ind) => setActive(ind)}

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({
    type: 0,
    order: true,
  });

  // const [isUp, setIsUp] = useState(true);

  useEffect(() => {
    const category = activeCategory === 0 ? "" : activeCategory;
    const sort =
      activeSort.type === 0
        ? "rating"
        : activeSort.type === 1
        ? "price"
        : "title";
    const order = activeSort.order === true ? "desc" : "asc";
    fetch(
      `https://67dab57735c87309f52da5b5.mockapi.io/items?category=${category}&sortBy=${sort}&order=${order}`
    )
      .then((resp) => resp.json())
      .then((data) => setPizzas(data))
      .finally(() => setLoading(false))
      .catch((err) => {
        console.log(err);
        alert(`Ошибка запроса: ${err.message}`);
      });
  }, [activeCategory, activeSort]);

  return (
    <>
      <div className="content__top">
        <Categories
          active={activeCategory}
          setActive={(ind) => setActiveCategory(ind)}
          setLoading={setLoading}
        />
        <Sort sort={activeSort} setSort={setActiveSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!loading ? (
          pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
        ) : (
          <div>
            {[...new Array(10)].map((_, ind) => (
              <Skeleton key={ind} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
