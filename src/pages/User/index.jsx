import { useEffect, useState } from 'react';
import styles from './User.module.scss'
import { useParams } from 'react-router-dom'

export function User() {

    const query = useParams();
    const [user, setUser] = useState(null);

    console.log(user);
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('dataset'));
        const userFiltered = users.filter(user => user.login.uuid === query.id)[0];
        setUser(userFiltered);

    }, [])

    return (
        <div className={styles.container}>
            {
                user && (
                    <>
                        <div className={styles.container__map}></div>
                        <div className={styles.container__content}>
                            <div className={styles.content__wrapper}>
                                <img
                                    src={user.picture.large}
                                    alt="image user"
                                    className={styles.wrapper__image} />

                                <p
                                    className={`${styles.content__text}
                                      ${styles['content__text--big']}`}>
                                    {user.name.first}
                                </p>
                            </div>
                            <p className={`${styles.content__text} ${styles['content__text--medium']}`}>
                                {user.name.first} 
                                Lives in {user.location.city}, {user.location.state}
                            </p>
                        </div>
                    </>
                )
            }
        </div>
    )
}