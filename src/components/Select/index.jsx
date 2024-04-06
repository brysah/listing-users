import styles from './Select.module.scss'

export function Select(){
    return(
        <select name="" id="" className={styles.select}>
            <option className={styles.select__option} >All</option>
            <option className={styles.select__option} value="male">Male</option>
            <option className={styles.select__option} value="female">Female</option>
        </select>
    )
}