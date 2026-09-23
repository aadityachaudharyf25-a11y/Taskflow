import "./FilterBar.css";

function FilterBar({ filter, setFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <section className="filter-bar">
      <h2>Filter Tasks</h2>

      <div className="filter-buttons">
        {filters.map((item) => (
          <button
            key={item}
            className={
              filter === item
                ? "filter-button active"
                : "filter-button"
            }
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

export default FilterBar;
