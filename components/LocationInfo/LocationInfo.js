import styles from "./LocationInfo.module.css";
import Typography from "../Typography/Typography";

export default ({ type, name }) => {
  return (
    <div className={styles.locationInfo}>
      <img src={`/locations/${type}/${type}-lg.png`} />
      <Typography modifiers={["mb", 'px']}>{name}</Typography>
      <Typography modifiers={["block", 'px']} variant="subtitle">
        {type}
      </Typography>
    </div>
  );
};
