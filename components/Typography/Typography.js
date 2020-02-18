import styles from "./Typography.module.css";
import { createStyles } from "../../helpers/helpers";

export default ({ variant = "title", modifiers = [], children }) => {
  return (
    <span className={`${styles[variant]} ${createStyles(modifiers, styles)}`}>
      {children}
    </span>
  );
};
