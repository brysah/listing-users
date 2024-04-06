import styles from '../Table.module.scss'

export function Row(){
    return(
        <tr>
        <td className={`${styles.table__cell} ${styles.table__text}`}  >
          <img src="https://placehold.co/50x50" alt="Imagem do usuário" className={styles.table__cell__image} />
        </td>
        <td className={`${styles.table__cell} ${styles.table__text}`}  >Ayo Edebri</td>
        <td className={`${styles.table__cell} ${styles.table__text}`}  >29</td>
        <td className={`${styles.table__cell} ${styles.table__text}`}  >Ireland</td>
        <td className={`${styles.table__cell} ${styles.table__text}`}  >Female</td>
      </tr>
    )
}