import styles from "./Layout.module.css";
import Container from "./Container";

export default ({ children }) => (
  <Container>
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
