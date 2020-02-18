import styles from "./LocationItem.module.css";
import Link from "next/link";
import Typography from "../Typography/Typography";
import Card from "../Card/Card";

export default ({ type, id, name, residents }) => (
  <Link href="/location/[id]" as={`/location/${id}`}>
    <a>
      <Card imgSrc={`/locations/${type}/${type}.png`}>
        <Typography modifiers={["mb", "noWrap"]}>{name}</Typography>
        <Typography variant="subtitle" modifiers={["mb", "noWrap"]}>
          {type}
        </Typography>
        <div className={styles.residents}>
          {residents
            .filter((_, id) => id < 3)
            .map(({ image }) =>
              image ? <img key={image} src={image} /> : null
            )}
        </div>
      </Card>
    </a>
  </Link>
);
