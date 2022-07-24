import { useContext } from "react";
import { ThemeContext } from "../../pages";
import styles from "../../styles/Header.module.css";
import { MoonIcon, SunIcon } from "../Icons";

export default function Header(props: any) {
  const Theme = useContext(ThemeContext);

  return (
    <div className={Theme === "Dark" ? styles.wrapper: styles.wrapperLight}>
      <div
        className={styles.container}
      >
        <h1>TODO</h1>
        <span onClick={() => props.toogleTheme()}>
          {Theme === "Dark" ? SunIcon : MoonIcon}
        </span>
      </div>
    </div>
  );
}
