import styles from '../Table.module.scss'

export function Thead() {
    return (
        <thead className={styles.table__head}>
            <tr className={styles.table__row}>
                <th  className={styles.table__text} scope="col">Photo</th>
                <th  className={styles.table__text} scope="col">Name</th>
                <th  className={styles.table__text} scope="col">Age</th>
                <th  className={styles.table__text} scope="col">Country</th>
                <th  className={styles.table__text} scope="col">Gender</th>
            </tr>
        </thead>
    )
}