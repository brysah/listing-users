import { Thead } from "./Thead"
import { Row } from "./Row"
import styles from './Table.module.scss'
import { Link } from 'react-router-dom'

export function Table({ dataPeople, modeList }) {
    return (
        <table className={styles.table}>
            {modeList ? (
                <>
                    <tbody className={`${styles.grid} ${styles['grid--four-columns']}`} >
                        {dataPeople &&
                            dataPeople.map(people => (
                                <Link to='/teste'>
                                    <Row
                                        data={people}
                                        key={people.login.uuid}
                                        mode={modeList}
                                    />
                                </Link>
                            ))
                        }
                    </tbody>
                </>
            ) : (
                <>
                    <Thead />
                    <tbody>
                        {dataPeople &&
                            dataPeople.map(people => (
                                <Link to='/teste'>
                                    <Row data={people} key={people.login.uuid} />
                                </Link>
                            ))
                        }
                    </tbody>
                </>
            )}
        </table>
    )
}
