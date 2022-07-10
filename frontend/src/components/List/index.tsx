import styles from '../../styles/List.module.css'
export default function List(props: any){
    return (
        <div className={styles.list}>
            <div className={styles.circle}></div>
            <span>{props.text}</span>
        </div>
    )
}