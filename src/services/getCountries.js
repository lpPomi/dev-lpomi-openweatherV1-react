import { ajax } from '../tools/ajax';

const url1 = 'https://restcountries.com/v3.1/all';

export const getCountries = async () => {
  const optionsRequest = {
    method: 'GET',
    url: url1,
  };
  return await ajax(optionsRequest);
};
