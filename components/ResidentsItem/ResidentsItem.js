import useFallback from "../../hooks/useFallback";
import styles from "./ResidentsItem.module.css";
import Link from "next/link";

export default ({ image, name, location, type, id }) => {
  const fallbackProps = useFallback("/locations/unknown/unknown.png");

  return (
    <Link href="/resident/[id]" as={`/resident/${id}`}>
      <a className={styles.link}>
        <div className={styles.card}>
          <img src={image} {...fallbackProps} />
          <div className={styles.info}>
            <span className={styles.title}>{name}</span>
            <p className={styles.description}>{location}</p>
            {type && <p className={styles.description}>{type}</p>}
          </div>
        </div>
      </a>
    </Link>
  );
};
