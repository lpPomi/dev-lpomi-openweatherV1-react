import { ajax } from '../tools/ajax';

//const url1 = 'https://spott.p.rapidapi.com/places/autocomplete?';

/* const url1 =
  'https://spott.p.rapidapi.com/places/autocomplete?limit=100&country=PE&type=CITY';

  'https://api.openweathermap.org/data/2.5/weather?q=Curitiba&appid=eee79289eb4403839653d02ed4d3536a'
 */
export const getWeather = async (city) => {
  const optionsRequest = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',

    params: {
      q: city,
      appid: 'eee79289eb4403839653d02ed4d3536a',
      units: 'metric', // to het in grad celcious
    },
  };
  return await ajax(optionsRequest);
};
