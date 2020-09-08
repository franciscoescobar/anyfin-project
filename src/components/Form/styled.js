import styled from 'styled-components';
export const FormWrapper = styled.form`
    padding-bottom: 1rem;
    width: 70%;
    display: flex;
    background: white;  
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
`;
export const CountriesSelect = styled.select`
    width: 70%;
    margin-top: 1rem;
    height: 42px;
    border-radius: 5px;
    border: 1px solid #42a5f5;
    &:focus {
        border: 1px solid #0077c2;
    }
`;
export const MoneyInput = styled.input`
    text-align: center;
    width: 30%;
    margin-top: 1rem;
    height: 42px;
    border-radius: 5px;
    border: 1px solid #42a5f5;
    &:focus {
        border: 1px solid #0077c2;
    }
`;
export const CountryList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    > li {
        margin: 0;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 200px;
        margin-top: 1rem;
        > p {
            flex: 1 0 200px;
        }
        .results {
            font-size: 16px;
        }
        .label {
            font-weight: bold;
            font-size: 12px;
        }
    }
`
export const CurrencyWrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    > p {
        margin: 1rem;
    }
`
export const Title = styled.h2`
    text-align: center;
    font-size: 18px;
    font-weight: normal;
`