
import axios from 'axios';

function TestGetData() {


    const url1 = 'https://restcountries.com/v3.1/all';


    const getCountries = async () => {

        try {
            const result = await axios.get(url1);
            console.log("🚀 ~ file: App.jsx ~ line 98 ~ getCountries ~ result", result.data);
            //console.log(result.data[0].name.common);
        } catch (error) {
            console.error(error);
        }
    };
    return (

        <button onClick={getCountries} >
            get countries
        </button>

    );
}

export default TestGetData;