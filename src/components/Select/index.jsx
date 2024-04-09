import styles from './Select.module.scss';

export function Select({ options }) {
    return (
        <select name="" id="" className={styles.select}>
            {
                options &&
                (
                    <>
                        <option className={styles.select__option} value='all'>All</option>
                        {
                            options.map(opt => (
                                opt.code ? (
                                    <option key={opt.code} className={styles.select__option} value={opt.code}>{opt.name}</option>) :
                                    (
                                        <option key={opt} className={styles.select__option} value={opt}>{opt}</option>)
                            ))
                        }
                    </>
                )
            }
        </select>
    );
}
 