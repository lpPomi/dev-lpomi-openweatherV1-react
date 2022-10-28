import Navbar from './components/Navbar';
import TestGetData from './components/TestGetData';
import SelectGetData from './components/SelectGetData';
import { getCountries } from './services/getCountries';



import { useEffect, useState } from 'react';

function App() {

  const url1 = 'https://restcountries.com/v3.1/all';

  // this line was moved to the to tools/ajax.js
  //const ajax = () => axios.request().then((response) => response.data);


  // create the useState variable countries to save the countries
  const [countries, setCountries] = useState([]);




  useEffect(() => {
    const options = {
      method: 'GET',
      url: url1
    };
    (async () => {
      /* 
      this line was move to the <services />
      <getCountries className="js"></getCountries>const countries = await ajax(options);
       */
      const countries = await getCountries(options);
      console.log("🚀 ~ file: App.jsx ~ line 24 ~ countries", countries);

      /*   here we store the countries in countries */
      setCountries(countries);

    })(); // function autoinvocation
  }, []);



  return (
    <div className="App">

      <Navbar />
      {/* 
      <TestGetData />

      <SelectGetData /> */}

    </div>
  );
}
export default App;
