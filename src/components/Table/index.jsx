import { Thead } from "./Thead"
import { Row } from "./Row"
import styles from './Table.module.scss'

export function Table({dataPeople}) {
    return (
        <table className={styles.table}>
            <Thead />
            <tbody>
                <Row/>
                {
                    dataPeople && 
                    (
                        dataPeople.map(people=>
                            ( 
                                <Row data={people} key={people.id.value}/>
                            )
                        )
                    )
                }
            </tbody>
        </table>
    )
}