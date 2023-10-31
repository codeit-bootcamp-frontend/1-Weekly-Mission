import styles from './ServiceExplainer.module.css';
import ExplainerSectionArray from './ExplainerSectionArray';

function ServiceExplainer() {
  return (
    <main>
      {ExplainerSectionArray.map((Section) => {
        const root = `${styles.root} ${styles[Section.position]}`;

        return (
          <section className={root} id={Section.id} key={Section.id}>
            <h2 className={styles.title}>{Section.title}</h2>
            <p className={styles.subtitle}>{Section.children}</p>
            <div className={styles.img}>
              <img src={Section.img} alt="" />
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default ServiceExplainer;
