import styles from './Search.module.scss'

export function Search({handleOnChange,handleOnClick}){
    return(
        <fieldset className={styles.search} >
            <div className={styles.search__input}>
                <label htmlFor="search"></label>
                <input type="text" placeholder='Search users...' id='search' name='search' onChange={handleOnChange}/>
            </div>
            <button className={styles.search__button} onClick={handleOnClick} >Search</button>
        </fieldset>
    )
}