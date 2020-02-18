import styles from "./Layout.module.css";
import Container from "./Container";
import Typography from "../Typography/Typography";

export default ({ children, title }) => (
  <Container>
    {title && <Typography modifiers={["mb", "textCenter"]}>{title}</Typography>}
    <div className={styles.layout}>
      {Array.isArray(children) ? (
        children.map((child, id) => (
          <div key={id} className={styles["item-wrapper"]}>
            {child}
          </div>
        ))
      ) : (
        <div className={styles["item-wrapper"]}>{children}</div>
      )}
    </div>
  </Container>
);
