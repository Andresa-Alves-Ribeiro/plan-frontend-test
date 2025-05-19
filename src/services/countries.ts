import axios from 'axios'

const BASE_URL = 'https://restcountries.com/v3.1'

export interface Country {
  name: {
    common: string;
    official: string;
  };
  translations: {
    por: {
      common: string;
      official: string;
    };
  };
  capital: string[];
  region: string;
  languages: { [key: string]: string };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  currencies: { [key: string]: { name: string; symbol: string } };
}

export const countriesService = {
  getAllCountries: async (): Promise<Country[]> => {
    const response = await axios.get(`${BASE_URL}/all`)
    return response.data
  },

  getCountryByName: async (name: string): Promise<Country[]> => {
    const response = await axios.get(`${BASE_URL}/name/${name}`)
    return response.data
  },

  getCountriesByRegion: async (region: string): Promise<Country[]> => {
    const response = await axios.get(`${BASE_URL}/region/${region}`)
    return response.data
  },
}
