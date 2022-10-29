import { ajax } from '../tools/ajax';

//const url1 = 'https://spott.p.rapidapi.com/places/autocomplete?';

/* const url1 =
  'https://spott.p.rapidapi.com/places/autocomplete?limit=100&country=PE&type=CITY';
 */
export const getCities = async (countryAbreviation) => {
  const optionsRequest = {
    headers: {
      'X-RapidAPI-Key': 'b16f9cebbdmsh351ce2d858eda28p14a09djsnf34b250a9bf4',
      'X-RapidAPI-Host': 'spott.p.rapidapi.com',
    },
    method: 'GET',
    url: 'https://spott.p.rapidapi.com/places/autocomplete',

    params: {
      limit: 100,
      type: 'CITY',
      country: countryAbreviation ?? 'DE',
    },
  };
  return await ajax(optionsRequest);
};
