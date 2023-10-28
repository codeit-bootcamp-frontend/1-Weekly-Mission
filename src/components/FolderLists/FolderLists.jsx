import styles from "./FolderLists.module.css";

const FolderList = ({ data, onClick }) => {
  const handleClickButton = (id, name) => {
    onClick(id, name);
  };

  return (
    <button
      className={styles.button}
      onClick={() => handleClickButton(data.id, data.name)}
    >
      {data.name}
    </button>
  );
};

const FolderLists = ({ folderData, onClick, title }) => {
  const handleClickButton = (id, name) => {
    onClick(id, name);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonBox}>
        <button
          className={styles.button}
          onClick={() => handleClickButton("", "전체")}
        >
          전체
        </button>
        {folderData.map((data) => {
          return <FolderList key={data.id} data={data} onClick={onClick} />;
        })}
      </div>
      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default FolderLists;
