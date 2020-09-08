import React, {useState, useEffect} from 'react'
import { FormWrapper, CountriesSelect, CountryList, MoneyInput, CurrencyWrapper, Title } from './styled';
import api from '../../utils/api';
const Form = () => {
    const [search, setSearch] = useState("");
    const [money, setMoney] = useState("");
    const [localCurrency, setLocalCurrency] = useState(null);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        api.getCountries().then(countries => {
            setCountries(countries);
        })
    }, [])

    useEffect(() => {
        selectedCountry && api.getCurrencyFromCountry(selectedCountry.currencies[0].code).then(localMoney => {
            setLocalCurrency(Object.values(localMoney)[0] * Number(money));
        });
    }, [money, selectedCountry])

    const onSearchChange = (e) => {
        setSearch(e.target.value);
        const selectedCountry = countries.find(country => country.name === e.target.value);
        api.getDataFromCountry(selectedCountry.alpha3Code).then(dataCountry => {

            setSelectedCountry(dataCountry);
        })
    }

    const onMoneyChange = (e) => {
        setMoney(e.target.value);
    }


    return (
    <FormWrapper>
        <Title>Choose a country</Title>
        <CountriesSelect onChange={onSearchChange} value={search}>
            {
            countries ? 
            countries.map(country => 
                <option key={country.name}>{country.name}</option>
            ) : 
            <option>No options</option>
            }
        </CountriesSelect>
        {selectedCountry &&
            <CountryList>
                <li>
                    <p className="label">Full Country Name</p>
                    <p className="results">{selectedCountry.name}</p>
                </li>
                <li>
                    <p className="label">Capital</p>
                    <p className="results">{selectedCountry.capital}</p>
                </li>
                <li>
                    <p className="label">Population</p>
                    <p className="results">{selectedCountry.population.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</p>
                </li>
                <li>
                    <p className="label">Currency</p>
                    <p className="results">{selectedCountry.currencies[0].code}</p>
                </li>
            </CountryList>
        }
        <Title>Amount in SEK</Title>
        <MoneyInput onChange={onMoneyChange} value={money}/>
        {selectedCountry &&
            <CurrencyWrapper>
                <p>SEK  {money || ''}</p>
                <p>{selectedCountry.currencies[0].code}  {localCurrency || ''}</p>
            </CurrencyWrapper>
        }
    </FormWrapper>
)};

export default Form;