import Link from "next/link";
import Typography from "../Typography/Typography";
import Card from "../Card/Card";

export default ({ image, name, location, species, id }) => (
  <Link href="/resident/[id]" as={`/resident/${id}`}>
    <a>
      <Card imgSrc={image}>
        <Typography modifiers={["mb", "noWrap"]}>{name}</Typography>
        <Typography variant="subtitle" modifiers={["mb"]}>
          {location}
        </Typography>
        <Typography variant="subtitle">{species}</Typography>
      </Card>
    </a>
  </Link>
);
