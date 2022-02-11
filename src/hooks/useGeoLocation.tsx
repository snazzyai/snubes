import { useEffect, useState } from 'react';
// import countryData from '../data/countrycode';
import getDialCode from '../helper/fetchDialCode';

const useGeoLocationFinder = (): string => {
  const [code, setCode] = useState('');

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) return false;
      navigator.geolocation.getCurrentPosition(async (position) => {
        // eslint-disable-next-line max-len
        const areaCode = await getDialCode(position.coords.latitude.toString(), position.coords.longitude.toString());
        if (areaCode) setCode(areaCode);
      });
      return true;
    };
    getLocation();
  }, []);

  return code;
};

export default useGeoLocationFinder;
