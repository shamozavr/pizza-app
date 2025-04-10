function Categories({ active, setActive, setLoading }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, ind) => (
          <li
            onClick={() => {
              setActive(ind);
              setLoading(true);
            }}
            key={ind}
            className={ind === active ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
