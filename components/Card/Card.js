import styles from "./Card.module.css";
import useFallback from "../../hooks/useFallback";

export default ({ children, imgSrc }) => {
  const fallbackProps = useFallback("/locations/unknown/unknown.png");

  return (
    <div className={styles.card}>
      <img src={imgSrc} {...fallbackProps} />
      <div className={styles.info}>
        {children}
      </div>
    </div>
  );
};
