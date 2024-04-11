import loader  from '../../assets/loader.svg'
import styles from './Loading.module.scss'

export function Loading(){ 
    return(
        <div className={styles.loader}>
            <img src={loader} alt="loader" />
        </div>
    )
}