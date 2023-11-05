import checkIcon from '../assets/images/checkIcon.svg';
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
                <div key={list.id}>
                  <input
                    className={styles.input}
                    type="radio"
                    id={list.name}
                    name="folder"
                    value={list.id}
                  />
                  <label htmlFor={list.name} className={styles.label}>
                    <div className={styles.container}>
                      <p className={styles.folderName}>{list.name}</p>
                      <span className={styles.linkLength}>
                        {list.link.count}개 링크
                      </span>
                    </div>
                    <img class={styles.labelImg} src={checkIcon} alt="" />
                  </label>
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
