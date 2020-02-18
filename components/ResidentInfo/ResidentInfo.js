import useFallback from "../../hooks/useFallback";
import styles from "./ResidentInfo.module.css";
import Typography from "../Typography/Typography";

export default ({ character }) => {
  const fallbackProps = useFallback("/locations/unknown/unknown.png");

  return (
    <div className={styles.residentInfo}>
      <img src={character.image} {...fallbackProps} />
      <div className={styles.infoWrapper}>
        <div className={styles.mb}>
          <Typography modifiers={["block"]}>{character.name}</Typography>
          <Typography variant="subtitle" modifiers={["block"]}>
            {character.location.name}
          </Typography>
          <Typography variant="subtitle">{character.species}</Typography>
        </div>
        <div className={styles.mb}>
          <Typography modifiers={["block"]}>Status:</Typography>
          <Typography>{character.status}</Typography>
        </div>
        <div className={styles.mb}>
          <Typography modifiers={["block"]}>Home planet:</Typography>
          <Typography>{character.origin.name}</Typography>
        </div>
      </div>
    </div>
  );
};
