import useFallback from "../../hooks/useFallback";
import styles from "./ResidentInfo.module.css";

export default ({ character }) => {
  const fallbackProps = useFallback("/locations/unknown/unknown.png");

  return (
    <div className={styles.residentInfo}>
      <img src={character.image} {...fallbackProps} />
      <div className={styles.infoWrapper}>
        <div className={styles["mb-10"]}>
          <h1>{character.name}</h1>
          <p>{character.location.name}</p>
          {character.type && <p>{character.type}</p>}
        </div>
        <div className={styles["mb-10"]}>
          <h3>Status:</h3>
          <h3>{character.status}</h3>
        </div>
        <div className={styles["mb-10"]}>
          <h3>Home planet:</h3>
          <h3>{character.origin.name}</h3>
        </div>
      </div>
    </div>
  );
};
