import Container from "../Layout/Container";
import styles from './Loader.module.css'

export default () => (
  <Container>
    <img className={styles.loader} src="https://cdn.dribbble.com/users/1897588/screenshots/3887258/gif_export.gif" />
  </Container>
);
