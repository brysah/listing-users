import styles from './Home.module.scss'
import { Search } from '../../components/Search'
import { Select } from '../../components/Select'
import { Checkbox } from '../../components/Checkbox'
import { ToggleSwitch } from '../../components/ToggleSwitch'
import { Table } from '../../components/Table'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'

export function Home() {
    const countries = [
        { code: 'AU', name: 'Australia' },
        { code: 'BR', name: 'Brazil' },
        { code: 'CA', name: 'Canada' },
        { code: 'CH', name: 'Switzerland' },
        { code: 'DE', name: 'Germany' },
        { code: 'DK', name: 'Denmark' },
        { code: 'ES', name: 'Spain' },
        { code: 'FI', name: 'Finland' },
        { code: 'FR', name: 'France' },
        { code: 'GB', name: 'United Kingdom' },
        { code: 'IE', name: 'Ireland' },
        { code: 'IN', name: 'India' },
        { code: 'IR', name: 'Iran' },
        { code: 'MX', name: 'Mexico' },
        { code: 'NL', name: 'Netherlands' },
        { code: 'NO', name: 'Norway' },
        { code: 'NZ', name: 'New Zealand' },
        { code: 'RS', name: 'Serbia' },
        { code: 'TR', name: 'Turkey' },
        { code: 'UA', name: 'Ukraine' },
        { code: 'US', name: 'United States' }
    ];

    const genders = ['female','male'];
    
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
                <Select options={genders}/>
                <Select options={countries}/>
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