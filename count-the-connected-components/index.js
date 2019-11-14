// https://www.codewars.com/kata/count-the-connected-components

const countDistricts = city => {
  let distrCount = 0;
  const distrMap = {};
  const markDistr = (place, distr) => {
    if (place in distrMap) return;
    distrMap[place] = distr;
    city[place].map(place => markDistr(place, distr));
  };
  Object.keys(city).map((place, i) => markDistr(place, i));
  return new Set(Object.values(distrMap)).size;
};
