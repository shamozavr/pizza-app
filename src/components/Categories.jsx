import { useContext } from "react";
import { AppContext } from "./App";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/slices/filterSlice";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const { setLoading } = useContext(AppContext);
  const activeCategory = useSelector((state) => state.filter.category);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((category, ind) => (
          <li
            onClick={() => {
              dispatch(setCategory(ind));
              setLoading(true);
            }}
            key={ind}
            className={ind === activeCategory ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
