const formatPhoneNumber = (code: string, number: string): string => {
  const splitArray = number.split('');
  splitArray.splice(4, 0, ' ');
  splitArray.splice(8, 0, ' ');
  return `${code} ${splitArray.join('')}`;
};

export default formatPhoneNumber;
