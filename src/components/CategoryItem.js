import "./CategoryItem.css";

function CategoryItem({ data, handleClick }) {
  function handleCategoryClick() {
    handleClick(data.id, data.name);
  }

  return (
    <li className="category-item" onClick={handleCategoryClick}>
      <a>{data.name}</a>
    </li>
  );
}

export default CategoryItem;
