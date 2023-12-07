import styles from "./ServiceExplainer.module.css";
import ExplainerSectionItems from "./ExplainerSectionItems";
import Image from "next/image";

function ServiceExplainer() {
  return (
    <main>
      {ExplainerSectionItems.map((Item) => {
        const root = `${styles.root} ${styles[Item.position]}`;

        return (
          <section className={root} id={Item.id} key={Item.id}>
            <h2 className={styles.title}>{Item.title}</h2>
            <p className={styles.subtitle}>{Item.children}</p>
            <div className={styles.imageContainer}>
              <Image width={2200} height={1800} className={styles.image} src={Item.img} alt="" />
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default ServiceExplainer;
