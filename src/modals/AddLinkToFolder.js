import styles from './AddLinkToFolder.module.css';
import ModalHeader from '../components/ModalHeader/ModalHeader';
import Button from '../components/Button/Button';

function AddLinkToFolder({ folderLists, children }) {
  return (
    <>
      <ModalHeader title="폴더에 추가" subTitle={children}></ModalHeader>
      <div className={styles.body}>
        <form className={styles.form} noValidate>
          <div>
            {folderLists.map((list) => {
              return (
                <div key={list.id} className={styles.container}>
                  <label htmlFor={list.name} className={styles.label}>
                    {list.name}
                    <span className={styles.subLabel}>
                      {list.link.count}개 링크
                    </span>
                  </label>

                  <input
                    className={styles.input}
                    type="radio"
                    id={list.name}
                    name="folder"
                    value={list.id}
                  />
                </div>
              );
            })}
          </div>
          <Button>추가하기</Button>
        </form>
      </div>
    </>
  );
}

export default AddLinkToFolder;
