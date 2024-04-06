import styles from './Home.module.scss'
import { Search } from '../../components/Search'
import { Select } from '../../components/Select'
import { Checkbox } from '../../components/Checkbox'
import { ToggleSwitch } from '../../components/ToggleSwitch'
import { Table } from '../../components/Table'

export function Home() {
    return (
        <div className={styles.container}>
            <Search />
            <div className={styles.filters}>
                <Select />
                <Select />
                <Checkbox />
                <div className={styles.filters__item}>
                    <ToggleSwitch />
                    <p>List</p>
                </div>
            </div>
            <Table/>
        </div>
    )
}