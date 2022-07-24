import styles from "../../styles/Wrapper.module.css";
export default function Wrapper(props: any) {
  return <div className={styles.wrapper}>{props.children}</div>;
}
