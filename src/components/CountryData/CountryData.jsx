

const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log('inside country data', country, handleVisitedCountry, handleVisitedFlags)
    return (
        <div>
            <p>Country Data : {country.name.common}</p>
        </div>
    );
};

export default CountryData;