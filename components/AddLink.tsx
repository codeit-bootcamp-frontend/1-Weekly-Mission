import styles from '@/styles/addLink.module.css';

function AddLink(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.input_container}>
          <div className={styles.add_box}>
            <img src="/assets/image/linkIcon.svg" alt="링크 아이콘" />
            <input className={styles.link_input} placeholder="링크를 추가해 보세요" />
            <button className={styles.cta}>추가하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddLink;
