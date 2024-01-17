import ExplainerList from "./ExplainerList";
import styles from "./ServiceExplainer.module.css";
import Image from "next/image";

function ServiceExplainer() {
  return (
    <main>
      {ExplainerList.map((Item) => {
        const root = `${styles.root} ${styles[Item.position]}`;

        return (
          <section className={root} id={Item.id} key={Item.id}>
            <h2 className={styles.title}>{Item.title}</h2>
            <p className={styles.subtitle}>{Item.children}</p>

            <div className={styles.imageContainer}>
              <Image fill className={styles.image} src={Item.img} sizes="(max-width: 900px) 1200px" alt="" />
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default ServiceExplainer;
