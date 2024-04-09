import styles from './Search.module.scss'

export function Search({handleChange,handleOnClick,value}){
    return(
        <fieldset className={styles.search} >
            <div className={styles.search__input}>
                <label htmlFor="search"></label>
                <input type="text" placeholder='Search users...' id='search' name='search' onChange={handleChange} value={value}/>
            </div>
            <button className={styles.search__button} onClick={handleOnClick} >Search</button>
        </fieldset>
    )
}