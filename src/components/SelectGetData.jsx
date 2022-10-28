import React from 'react'

function SelectGetData() {



    /*
      wrong !
       const cars = {
      'car1': 'volvo',
      'car2': 'saab',
      'car3': 'opel',
      'car4': 'audi'
    }
    */



    const as = [

        {
            "name": {
                "common": "Barbados",
                "official": "Barbados",
                "nativeName": {
                    "eng": {
                        "official": "Barbados",
                        "common": "Barbados"
                    }
                }
            },
            "tld": [
                ".bb"
            ],
            "cca2": "BB",
            "ccn3": "052",
        },

        {

            "name": {
                "common": "Panama",
                "official": "Panama",
                "nativeName": {
                    "eng": {
                        "official": "Panama",
                        "common": "Panama"
                    }
                }
            },
            "tld": [
                ".bb"
            ],
            "cca2": "PA",
            "ccn3": "052",
        }


    ]


    /* here we read the data from the map array like the input fields ...while typing 
       the data comes from the Array as */
    const showCar = (e) => {
        //  console.log(car.value)  not good !
        console.log(e.target.value);
    }


    return (

        <div>

            <div>
                <label >Choose a Land</label>
                <select name="cars" id="car" onChange={showCar}>
                    <option value="">Select</option>

                    {as.map(res => <option key={res.cca2} value={res.cca2} >{res.name.common}</option>)}

                    {/* <option value="a">{as[0]}</option>
          <option value='b'>{as[1]}</option>
          <option value='c'>{as[2]}</option> */}
                </select>
            </div>


            {/* <div>
        <label>Elige un país:</label>
        <select onChange={showCar}>
          <option value="">Selecciona</option>
          <option value='BB' >LAND1</option>
          <option value='CC' >LAND2</option>
        </select>
      </div> */}

        </div>
    )
}

export default SelectGetData