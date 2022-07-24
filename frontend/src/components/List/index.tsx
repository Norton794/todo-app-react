import { useContext } from "react";
import { ThemeContext } from "../../pages";
import styles from "../../styles/List.module.css";
import { CheckIcon, XIcon } from "../Icons";
export default function List(props: any) {
  const id = props.todo._id;
  const done = props.todo.done;
  const Theme = useContext(ThemeContext);
  return (
    <div className={Theme === "Dark" ? styles.list : styles.listLight}>
      {done ? (
        <div
          className={styles.circleCheck}
          onClick={() => props.handlePending(id)}
        >
          {CheckIcon}
        </div>
      ) : (
        <div
          className={styles.circle}
          onClick={() => props.handleDone(id)}
        ></div>
      )}

      <span>
        {done ? (
          <del style={{ color: "#979797" }}>{props.text}</del>
        ) : (
          props.text
        )}
      </span>

      <span className={styles.icon} onClick={() => props.handleRemove(id)}>
        {XIcon}
      </span>
    </div>
  );
}
