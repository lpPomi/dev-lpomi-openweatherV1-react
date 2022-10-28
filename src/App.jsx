import Navbar from './components/Navbar';
import TestGetData from './components/TestGetData';
import SelectGetData from './components/SelectGetData';
import { getCountries } from './services/getCountries';
import { getCities } from './services/getCities';

import { useEffect, useState } from 'react';

function App() {

  /*   const url1 = 'https://restcountries.com/v3.1/all'; */

  // this line was moved to the to tools/ajax.js
  //const ajax = () => axios.request().then((response) => response.data);

  // create the useState variable countries to save all countries
  const [countries, setCountries] = useState([]);

  // create the useState variable cities to save all cities
  const [cities, setCities] = useState([]);



  useEffect(() => {
    /* 
     moved to services/getCountries   
    const options = {
      method: 'GET',
      url: url1
    }; */
    (async () => {
      /* 
      this line was move to the services/getCountries
      <getCountries className="js"></getCountries>const countries = await ajax(options);

      and 
      const countries = await getCountries(options);
      to
      const countries = await getCountries();
       */

      //console.log("🚀 ~ file: App.jsx ~ line 40 ~ countries", countries);

      /* 
            here we store the countries and cities  
            setCountriesData(countries);  
            or so
       */
      setCountries(await getCountries());

      //  setCities(await getCities());
      /* here we search only for the cities */
      /*  const tempCity = await getCities();
       console.log("🚀 ~ file: App.jsx ~ line 54 ~ tempCity", tempCity); */


    })(); // function autoinvocation
  }, []);

  /*   this console.log must be after the  useEffect(() */
  //console.log("🚀 ~ file: App.jsx ~ line 54 ~ countries", countries);

  /*   this console.log must be after the  useEffect(() */
  //console.log("🚀 ~ file: App.jsx ~ line 54 ~ cities", cities);




  /*  this function read the select field in the event e*/
  const handleCountry = async (e) => {
    e.preventDefault();


    /* we set a constant  */
    /*  const countryAbreviation = e.currentTarget.value;
     console.log("🚀 currentTarget country ab. value: ", countryAbreviation); */

    /*  or here we show the value from select statement */
    /*    console.log("🚀 target value: ", e.target.value); */


    /*  here we get the cities */
    /* const tempCity = await getCities(countryAbreviation);
    console.log("🚀 ~ file: App.jsx ~ line 84 ~ tempCity", tempCity); */

    /*  setCities(tempCity); */

    /*    or directly in one command */


    /*    const tempCity = await getCities(e.currentTarget.value);
       console.log("🚀 ~ file: App.jsx ~ line 84 ~ tempCity", tempCity);
   
       setCities(tempCity); */

    /* or even shorter */
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value));

    /*  e.currentTarget.value &&  .. to prevent to getCities if the e.currentTarget.value was not set */

  };


  const handleCity = (e) => {
    e.preventDefault();

    // we set a constant  
    const city = e.currentTarget.value;
    console.log("🚀 currentTarget city value: ", city);
  };





  /* 
    function sort1(countries) {
      countries.sort();
      console.log("🚀 ~ file: App.jsx ~ line 66 ~ sort1 ~ countries", countries);
    }
   */
  {/* copy the content from the array countries into a new array countries1 */ }
  /* const countries1 = new Map({ countries }); */

  {/* sort Ascending (low to high) the array countries1 */ }
  /* const sortedAsc = new Map([...countries1].sort());
  console.log("🚀 ~ file: App.jsx ~ line 88 ~ App ~ sortedAsc", sortedAsc); */





  return (
    <div className="App">

      <Navbar />
      {/* 
      <TestGetData />

      <SelectGetData /> */}

      {/* here we read the country abbreviation country PP rom 
      the select statement and then in the showCountry function 
      we show the result the terminal */}
      <div>
        <label >Choose a Land</label>
        <select onChange={handleCountry}>
          <option value="">Select</option>

          {
            countries.map(country => <option key={country.cca2} value={country.cca2} >{country.name.common}</option>)
          }
        </select>

      </div>


      {/* here we read the cities from the country abbreviation  
      in the select statement and then in the showCities function 
      we show the result the terminal */}

      {/*  create a short circuit for conditional rendering */}
      {cities.length > 0 && (

        <div>
          <label >Choose a City</label>
          <select onChange={handleCity}>
            <option value="">Select</option>
            {
              cities.map(city => <option key={city.id} value={city.name} >{city.name}</option>)
            }
          </select>
        </div>
      )
      }


      {/* 
      <button onClick={sort1}>
        sort
      </button>
 */}

    </div>
  );
}
export default App;
