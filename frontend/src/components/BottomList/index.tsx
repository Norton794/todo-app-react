import styles from '../../styles/BottomList.module.css'

export default function BottomList(props: any) {
  return (
    <div className={styles.bottom}>
      <div>1 item(s) left</div>
      <div className={styles.category}>
        <a href="" className={styles.active}>All</a>
        <a href="">Active</a>
        <a href="">Completed</a>
      </div>
      <div>
        <a href="">Clear Completed</a>
      </div>
    </div>
  );
}
