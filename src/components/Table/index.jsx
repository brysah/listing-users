import { Thead } from "./Thead"
import { Row } from "./Row"
import styles from './Table.module.scss'

export function Table() {
    return (
        <table className={styles.table}>
            <Thead />
            <tbody>
                <Row/>
            </tbody>
        </table>
    )
}