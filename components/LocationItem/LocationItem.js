import styles from "./LocationItem.module.css";
import Link from "next/link";
import useFallback from "../../hooks/useFallback";

export default ({ type, id, name, residents }) => {
  const fallbackProps = useFallback("/locations/unknown/unknown.png");

  return (
    <Link href="/location/[id]" as={`/location/${id}`}>
      <a className={styles.link}>
        <div className={styles.card}>
          <img src={`/locations/${type}/${type}.png`} {...fallbackProps} />
          <div className={styles.info}>
            <span className={styles.title}>{name}</span>
            <p className={styles.description}>{type}</p>
            <div className={styles.residents}>
              {residents
                .filter((resident, id) => id < 3)
                .map(({ image }) => (image ? <img src={image} /> : null))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
