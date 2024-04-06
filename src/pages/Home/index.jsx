import styles from './Home.module.scss'
import { Search } from '../../components/Search'

export function Home() {
    return (
        <div className={styles.container}>
            <Search/>
        </div>
    )
}