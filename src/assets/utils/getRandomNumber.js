const getRandomNumber = (min, max) => {
  const res = Math.round(Math.random() * (max - min) + min);
  return res;
};

export default getRandomNumber;
