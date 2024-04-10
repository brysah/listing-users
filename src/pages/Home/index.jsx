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
    const [selectedGender, setSelectedGender] = useState('all');
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [list,setList] = useState(true);
    const [adults, setAdults] = useState(false);
    const [user, setUser] = useState('');

    useEffect(() => {
        api.get(('/'), {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            params: {
                results: 100,
                seed: 'seed'
            }
        }).then(({ data }) => { 
            setPeople(data.results);
            setDataSet(data.results);
            localStorage.setItem('dataset',JSON.stringify(data.results));
        }).catch(error => console.error(error));
    }, []);

    function handleChange(e) {
        setUser(e.target.value);
    }

    function handleSearch() {
        const filtered = filterByName(dataSet, user);
        setPeople(filtered);
        setUser('');
    }

    function handleSelectGender(e) {
        const value = e.target.value;
        setSelectedGender(value);
        updatePeople(value, selectedCountry,adults);
    }

    function handleSelectCountry(e) {
        const value = e.target.value;
        setSelectedCountry(value);
        updatePeople(selectedGender, value ,adults);
    }

    function handleCheckbox(e) {
        const value = e.target.checked;
        setAdults(value);
        updatePeople(selectedGender, selectedCountry, value); 
    }
    function handleToggle(e) {
        const value = e.target.checked;
        setList(!value); 
    }

    function updatePeople(gender, country,adults) {
        let filtered = dataSet;
        if (gender !== 'all') {
            filtered = filterByGender(filtered, gender);
        }
        if (country !== 'all') {
            filtered = filterByNat(filtered, country);
        }
        if(adults !== false){
            filtered = filterByAge(filtered, adults)
        }

        setPeople(filtered);
    }

    function filterByName(arr, name) {
        return arr.filter((e) => e.name.first.toLowerCase().includes(name.toLowerCase()))
    }

    function filterByNat(arr, nat) {
        return arr.filter(e => e.nat === nat);
    }

    function filterByGender(arr, gender) {
        return arr.filter(e => e.gender === gender);
    }

    function filterByAge(arr,adult) { 
        if(adult === true ) adult = 18;
        else adult = 0;
        return arr.filter(e => e.registered.age > adult)
    }

    return (
        <div className={styles.container}>
            <Search handleChange={handleChange} handleOnClick={handleSearch} value={user} />
            <div className={styles.filters}>
                <Select options={genders} handleSelect={handleSelectGender} value={selectedGender} />
                <Select options={countries} handleSelect={handleSelectCountry} value={selectedCountry} />
                <Checkbox handleChange={handleCheckbox} />
                <div className={styles.filters__item}>
                    <ToggleSwitch handleChange={handleToggle}/>
                    <p>List</p>
                </div>
            </div>
            <Table dataPeople={people} modeList={list}/>
        </div>
    )
}
