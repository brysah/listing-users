import { Thead } from "./Thead"
import { Row } from "./Row"
import styles from './Table.module.scss' 

export function Table({ dataPeople, modeList }) {
    const navigate = useNavigate();
    return (
        <table className={styles.table}>
            {modeList ? (
                <>
                    <tbody className={`${styles.grid} ${styles['grid--four-columns']}`} >
                        {dataPeople &&
                            dataPeople.map(people => (
                                <Row
                                    data={people}
                                    key={people.login.uuid}
                                    mode={modeList} 
                                />
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
                                <Row data={people} key={people.login.uuid} />
                            ))
                        }
                    </tbody>
                </>
            )}
        </table>
    )
}
