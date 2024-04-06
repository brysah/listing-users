import styles from './Checkbox.module.scss'

export function Checkbox() {
    return (
        <label class={styles.container_label}>
            Adults
            <input type="checkbox"  />
            <span class={styles.checkmark}></span>

        </label>
    )
}