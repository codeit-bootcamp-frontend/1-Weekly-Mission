import styles from "styles/CategoryItem.module.css";

function CategoryItem({ data, handleClick }) {
  function handleCategoryClick() {
    handleClick(data.id, data.name);
  }

  return (
    <li onClick={handleCategoryClick} className={styles.categoryItem}>
      <button>{data.name}</button>
    </li>
  );
}

export default CategoryItem;
