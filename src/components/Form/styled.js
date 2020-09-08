import styled from 'styled-components';
export const FormWrapper = styled.form`
    width: 70%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    background: white;  
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    flex-direction: column;
`;
export const CountriesSelect = styled.select`
    width: 70%;
    margin: 0 auto;
    margin-top: 5%;
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
    margin: 0 auto;
    margin-top: 5%;
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
    margin: 0 20%;
    text-align: center;
    > li {
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 300px;
        margin-top: 1rem;
        > p {
            flex: 1 0 300px;
        }
        .results {
            font-weight: bold;
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
    font-size: 18px;
    font-weight: normal;
    margin-left: 4rem;
    margin-top: 2rem;
    margin-bottom: -1rem;
`