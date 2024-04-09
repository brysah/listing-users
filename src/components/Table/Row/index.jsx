import styles from '../Table.module.scss'

export function Row({ data, mode }) {
  return (
    <>
      {
        mode ? (
          <>
            {
              data && (
                <tr className={styles.grid}>
                  <td className={`${styles.table__cell} ${styles['table__cell--padding-list']}  ${styles.table__text} 
                   ${styles['table__text--big']}`}  >
                    <img
                      src={data.picture.large}
                      alt="Imagem do usuário"
                      className={`${styles.table__cell__image} ${styles['table__cell__image--large']} `} />
                  </td>
                  <td className={`${styles.table__cell} ${styles.table__text} ${styles['table__text--big']}`}  >{data.name.first}</td> 
                </tr>
              )
            }
          </>
        ) : (
          <>
            {
              data && (
                <tr>
                  <td className={`${styles.table__cell} ${styles.table__text}`}  >
                    <img
                      src={data.picture.medium}
                      alt="Imagem do usuário"
                      className={styles.table__cell__image} />
                  </td>
                  <td className={`${styles.table__cell} ${styles.table__text}`}  >{data.name.first}</td>
                  <td className={`${styles.table__cell} ${styles.table__text}`}  >{data.registered.age}</td>
                  <td className={`${styles.table__cell} ${styles.table__text}`}  >{data.location.country}</td>
                  <td className={`${styles.table__cell} ${styles.table__text}`}  >{data.gender}</td>
                </tr>
              )
            }
          </>
        )
      }
    </>
  )
}