import styles from './Checkbox.module.scss'

export function Checkbox({handleChange}) {
    return (
        <label className={styles.container_label}  >
            Adults
            <input type="checkbox" name='checkbox' onChange={handleChange}/>
            <span className={styles.checkmark}></span>

        </label>
    )
}