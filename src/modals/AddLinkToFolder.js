import styles from './AddFolder.module.css';
import ModalHeader from '../components/ModalHeader/ModalHeader';
import Button from '../components/Button/Button';

function AddLinkToFolder({ lists }) {
  return (
    <>
      <ModalHeader title="폴더 이름 변경"></ModalHeader>
      <div className={styles.body}>
        <form className={styles.form} noValidate>
          {lists.map((list) => {
            console.log(list);
            return (
              <div key={list.id}>
                <label htmlFor="mail">
                  {list.name} <span>{list.link.count}개 </span>
                </label>
                <input type="radio" id="mail" name="contact" value="mail" />
              </div>
            );
          })}

          <Button>추가하기</Button>
        </form>
      </div>
    </>
  );
}

export default AddLinkToFolder;
