import styles from './Checkbox.module.scss'

export function Checkbox() {
    return (
        <label className={styles.container_label}  >
            Adults
            <input type="checkbox" name='checkbox' />
            <span className={styles.checkmark}></span>

        </label>
    )
}