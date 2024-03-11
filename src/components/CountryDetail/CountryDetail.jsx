import CountryData from "../CountryData/CountryData";


// const CountryDetail = ({country, handleVisitedCountry, handleVisitedFlags}) => 
const CountryDetail = (props) => {
    const {country, handleVisitedCountry, handleVisitedFlags} = props;
    console.log(country)
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <CountryData country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}>
                
            </CountryData>
         {/* <CountryData {...props}></CountryData>  */}
        </div>
    );
};

export default CountryDetail;







