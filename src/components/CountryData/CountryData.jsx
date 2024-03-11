

const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    
    return (
        <div>
            <p>Country Data : {country.name.common}</p>
            <p>Country Visited: {handleVisitedCountry.continents}</p>
            <p>Country Region: {handleVisitedFlags.timezones}</p> 
        </div>
    );
};

export default CountryData;