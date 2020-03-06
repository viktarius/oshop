export const convertToArray = obj => {
  const keys = Object.keys(obj);
  return keys.map(key => ({
    $key: key,
    ...obj[key]
  }));
};
