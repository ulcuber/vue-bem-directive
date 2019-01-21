import cases from './cases';

const arrayedCases = {};
Object.keys(cases).forEach((key) => {
  const classes = cases[key];
  const shouldContain = classes.length > 0 ? classes.split(' ') : [];
  arrayedCases[key] = shouldContain;
});

export const getMaxLength = () => {
  let max = 0;
  Object.keys(cases).forEach((key) => {
    if (key.length > max) max = key.length;
  });
  max += 1;
  return max;
};

export const eachCase = (cb) => {
  Object.keys(arrayedCases).forEach((key) => {
    cb(key, arrayedCases[key]);
  });
};

export const replaceInArray = (arr, needle, newElement) => arr.map(
  element => (element.replace(needle, newElement)),
);
