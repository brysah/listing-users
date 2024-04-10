import { useEffect, useState } from 'react';
import styles from './User.module.scss'
import { useParams } from 'react-router-dom'

export function User() {

    const query = useParams();
    const [user, setUser] = useState(null);
 
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
                        <div className={styles.container__map}>
                        <iframe 
                        src={`
                        https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d{${user.location.longitude}}!3d{${user.location.latitude}}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU5JzQzLjUiUyA2wrAxNycyNC42Ilc!5e0!3m2!1sen!2sus!4v1646761540177!5m2!1sen!2sus
                        `}
                        width="100%" 
                        height="100%"   
                        allowFullScreen="true" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"> 
                        </iframe>
                        </div>
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