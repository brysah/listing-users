import styles from './ToggleSwitch.module.scss'

export function ToggleSwitch() {
    return (
        <label className={styles.switch}> 
            <input type="checkbox"/>
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    )
}