import styles from "./Header.module.css";
import Container from "../Layout/Container";

export default () => (
  <header className={styles.header}>
    <Container>
      <img className={styles.logo} src="/logo.png" />
    </Container>
  </header>
);
