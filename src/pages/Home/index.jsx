import styles from './Home.module.scss'
import { Search } from '../../components/Search'
import { Select } from '../../components/Select'
import { Checkbox } from '../../components/Checkbox'

export function Home() {
    return (
        <div className={styles.container}>
            <Search />
            <div className={styles.filters}>
                <Select />
                <Select />
                <Checkbox/>
            </div>
        </div>
    )
}