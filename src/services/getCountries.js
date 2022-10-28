import { ajax } from '../tools/ajax';

export const getCountries = async (optionsRequest) =>
  await ajax(optionsRequest);
