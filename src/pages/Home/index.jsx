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

    const genders = ['female', 'male'];
    const [dataSet, setDataSet] = useState([]);
    const [people, setPeople] = useState([]);
    const [user, setUser] = useState();

    useEffect(() => {
        api.get(('/'), {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            params: {
                results: 10,
                seed: 'seed'
            }
        }).then(
            ({ data }) => {
                setPeople(data.results);
                setDataSet(data.results);
            })
            .catch(error => console.error(error))

    }, []);

    function handleChange(e) {
        setUser(e.target.value)
    }

    function handleSearch() {
        const filtered = filterByName(dataSet, user)
        setPeople(filtered)
    }

    function handleSelectGender(e) {
        const selectCountry = document.querySelector('select[name="country"]');
        if (e.target.value === 'all') {
            if (selectCountry.value !== 'all') {  
                const filtered = filterByNat(dataSet, selectCountry.value); 
                setPeople(filtered)
                
            }
            else {
                setPeople(dataSet);
            }

        }
        else {
            if (selectCountry.value !== 'all') { 
                const filteredNat = filterByNat(dataSet, selectCountry.value);
                const filteredAll = filterByGender(filteredNat, e.target.value);
                setPeople(filteredAll)
            }
            else {
                const filtered = filterByGender(dataSet, e.target.value);
                setPeople(filtered);
            }
        }
    }

    function handleSelectNat(e) {
        const selectGender = document.querySelector('select[name="gender"]');
        if (e.target.value === 'all') {
            if (selectGender.value !== 'all') { 

                const newArr = people;
                const filteredGender = filterByGender(newArr, selectGender.value);
                const filteredAll = filterByNat(filteredGender, e.target.value);
                setPeople(filteredAll)
            }
            else {
                setPeople(dataSet);
            }
        }
        else {
            if (selectGender.value !== 'all') {
                const newArr = people;
                const filtered = filterByNat(newArr, e.target.value);
                setPeople(filtered)
            }
            else {
                const filtered = filterByNat(dataSet, e.target.value);
                setPeople(filtered);
            }
        }
    }

    function filterByName(arr, name) {
        return arr.filter((e) => e.name.first.toLowerCase().includes(name.toLowerCase()))
    }

    function filterByNat(arr, nat) {
        return arr.filter(e => e.nat.localeCompare(nat) === 0)
    }

    function filterByGender(arr, gender) {
        return arr.filter(e => e.gender.localeCompare(gender) === 0)
    }

    return (
        <div className={styles.container}>
            <Search handleChange={handleChange} handleOnClick={handleSearch} />
            <div className={styles.filters}>
                <Select options={genders} handleSelect={handleSelectGender} name='gender' />
                <Select options={countries} handleSelect={handleSelectNat} name='country' />
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