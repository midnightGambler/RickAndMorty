import styles from "./card.module.css";

export default ({img}) => <div className={styles.card}>
  <picture>
    <source srcSet={`/locations/${img}.jpg`} media="(min-width: 450px)" />
    <img src={`/locations/${img}.jpg`} />
  </picture>
  <div className={styles.info}>
    <h3 className={styles.title}>Earth (C-137)</h3>
    <p className={styles.description}>Planet</p>
  </div>
</div>;
