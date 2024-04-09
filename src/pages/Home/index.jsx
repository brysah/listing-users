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
    const [seed, setSeed] = useState();
    const [user, setUser] = useState({
        name: ''
    })

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
                setSeed(data.info.seed)
            })
            .catch(error => console.error(error))

    }, []);

    function handleChange(e) {
        setUser({ ...user, name: e.target.value })
        console.log(user);
    }

    function handleSearch() {
        api.get(('/'), {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            params: {
                seed: seed,
                results: 10
            }
        }).then(
            ({ data }) => {
                const filtered = filterByName(data.results,user.name)
                setPeople(filtered)
            })
            .catch(error => console.error(error))
    }

    function filterByName(arr,name){
        return arr.filter((e) => e.name.first.toLowerCase().includes(name.toLowerCase()))
    }

    return (
        <div className={styles.container}>
            <Search handleOnChange={handleChange} handleOnClick={handleSearch} />
            <div className={styles.filters}>
                <Select />
                <Select />
                <Checkbox />
                <div className={styles.filters__item}>
                    <ToggleSwitch />
                    <p>List</p>
                </div>
            </div>
            <Table dataPeople={people} />
        </div>
    )
}