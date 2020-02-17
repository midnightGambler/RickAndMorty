import styles from "./LocationInfo.module.css";

export default ({ type, name }) => {
  return (
    <div className={styles.locationInfo}>
      <img src={`/locations/${type}/${type}-lg.png`} />
      <h1>{name}</h1>
      <p>{type}</p>
    </div>
  );
};
