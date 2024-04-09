import styles from './Home.module.scss'
import { Search } from '../../components/Search'
import { Select } from '../../components/Select'
import { Checkbox } from '../../components/Checkbox'
import { ToggleSwitch } from '../../components/ToggleSwitch'
import { Table } from '../../components/Table'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'

export function Home() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        api.get(('/'), {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            params: {
                results: 12
            }
        }).then(
            ({ data }) => { 
                setPeople(data.results)
            } )
            .catch(error=>console.error(error))

    }, []);

    return (
        <div className={styles.container}>
            <Search />
            <div className={styles.filters}>
                <Select />
                <Select />
                <Checkbox />
                <div className={styles.filters__item}>
                    <ToggleSwitch />
                    <p>List</p>
                </div>
            </div>
            <Table dataPeople={people}/>
        </div>
    )
}