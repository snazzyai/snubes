import countryData from '../data/countrycode';

interface CountryData {
  name: string
  dial_code: string
  code: string
}
const getDialCode = async (lat:string, long:string) => {
  try {
    const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${import.meta.env.VITE_GOOGLE_KEY}`);
    const result = await data.json();
    // eslint-disable-next-line max-len
    const countryCode = result.results[result.results.length - 1].address_components[0].short_name;
    const location = countryData.filter((value:CountryData) => value.code === countryCode);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { dial_code } = location[0];
    return dial_code;
  } catch (err) {
    return false;
  }
};

export default getDialCode;
