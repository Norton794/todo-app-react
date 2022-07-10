import styles from '../../styles/Form.module.css'
export default function Form(){
    return(
        <form className={styles.form}>
            <div className="circle"></div>
            <input type="text" placeholder="Create a new todo..." />
        </form>
    )
}