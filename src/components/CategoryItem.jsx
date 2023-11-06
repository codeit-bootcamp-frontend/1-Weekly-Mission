import "./CategoryItem.css";

function CategoryItem({ data, handleClick }) {
  function handleCategoryClick() {
    handleClick(data.id, data.name);
  }

  return (
    <li onClick={handleCategoryClick} className="category-item">
      <button>{data.name}</button>
    </li>
  );
}

export default CategoryItem;
