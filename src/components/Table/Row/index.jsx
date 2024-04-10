import { Link } from 'react-router-dom'
import styles from '../Table.module.scss'

export function Row({ data, mode,id }) { 
  return (
    <>
      {
        mode ? ( 
          <>
            { 
              data && (
                <tr className={`${styles.grid} ${styles.row}`} >
                  <td className={`${styles.table__cell} ${styles['table__cell--padding-list']}  ${styles.table__text} 
                   ${styles['table__text--big']}`}  >
                    <Link to={`/user/${id}`} >
                      <img
                        src={data.picture.large}
                        alt="Imagem do usuário"
                        className={`${styles.table__cell__image} ${styles['table__cell__image--large']} `} />
                    </Link>
                  </td>
                  <td className={`${styles.table__cell} ${styles.table__text} ${styles['table__text--big']}`}  >
                    <Link>
                      {data.name.first}
                    </Link>
                  </td>
                </tr>
              )
            }
          </>
        ) : (
          <>
            {
              data && (
                <tr className={styles.row}>
                  <td className={`${styles.table__cell} ${styles.table__text}`}  >
                    <Link>
                      <img
                        src={data.picture.medium}
                        alt="Imagem do usuário"
                        className={styles.table__cell__image} />
                    </Link>
                  </td>
                  <td className={`${styles.table__cell} ${styles.table__text}`}  >
                    <Link>
                      {data.name.first}</Link>
                  </td>
                  <td className={`${styles.table__cell} ${styles.table__text}`}  >
                    <Link>
                      {data.registered.age}
                    </Link>
                  </td>
                  <td className={`${styles.table__cell} ${styles.table__text}`}  >
                    <Link>
                      {data.location.country}
                    </Link> </td>
                  <td className={`${styles.table__cell} ${styles.table__text}`}  >
                    <Link>
                      {data.gender}
                    </Link> </td>
                </tr>
              )
            }
          </>
        )
      }
    </>
  )
}