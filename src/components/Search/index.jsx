import styles from './Search.module.scss'

export function Search(){
    return(
        <fieldset className={styles.search} >
            <div className={styles.search__input}>
                <label htmlFor="search"></label>
                <input type="text" placeholder='Search users...' id='search' name='search' />
            </div>
            <button className={styles.search__button}>Search</button>
        </fieldset>
    )
}