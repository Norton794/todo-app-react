import styles from "../../styles/BottomList.module.css";

export default function BottomList(props: any) {
  return (
    <div className={styles.bottom}>
      <div>{props.pending} item(s) left</div>
      <div className={styles.category}>
        <a
          onClick={() => props.handleAll()}
          className={`${props.active1 === "active" ? styles.active : ""}`}
        >
          All
        </a>

        <a
          onClick={() => props.handleActive()}
          className={`${props.active2 === "active" ? styles.active : ""}`}
        >
          Active
        </a>

        <a
          onClick={() => props.handleCompleted()}
          className={`${props.active3 === "active" ? styles.active : ""}`}
        >
          Completed
        </a>
      </div>
      <div>
        <a onClick={() => props.clearCompleted()}>Clear Completed</a>
      </div>
    </div>
  );
}
