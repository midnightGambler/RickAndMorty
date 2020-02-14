import styles from "./Layout.module.css";
import Container from "./Container";
import BackLink from "./BackLink";

export default ({ children, backLink }) => (
  <Container>
    {backLink && <BackLink href={backLink} />}
    <div className={styles.layout}>
      {children.map((child, id) => (
        <div key={id} className={styles["item-wrapper"]}>{child}</div>
      ))}
    </div>
  </Container>
);
