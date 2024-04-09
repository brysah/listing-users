import styles from './ToggleSwitch.module.scss'

export function ToggleSwitch({handleChange}) {
    return (
        <label className={styles.switch}> 
            <input type="checkbox" onChange={handleChange}/>
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    )
}