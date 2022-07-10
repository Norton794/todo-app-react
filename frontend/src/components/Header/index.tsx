import styles from '../../styles/Header.module.css'
import { SunIcon } from '../Icons'

export default function Header(props: any){
    return(
        <div className={styles.container}>
            <h1>TODO</h1>
            <span>{SunIcon}</span>
        </div>
    )
}