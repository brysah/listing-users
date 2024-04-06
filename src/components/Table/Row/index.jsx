import styles from '../Table.module.scss'

export function Row({ data }) {
  return (
    (
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
    )
  )
}