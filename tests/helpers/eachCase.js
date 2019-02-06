import cases from './cases';

const arrayedCases = {};
Object.keys(cases).forEach((key) => {
  const classes = cases[key];
  const shouldContain = classes.length > 0 ? classes.split(' ') : [];
  arrayedCases[key] = shouldContain;
});

const getMaxLength = () => {
  let max = 0;
  Object.keys(cases).forEach((key) => {
    if (key.length > max) max = key.length;
  });
  max += 1;
  return max;
};

const maxLength = getMaxLength();

export default (cb) => {
  Object.keys(arrayedCases).forEach((key) => {
    const spaces = Array(maxLength - key.length).fill('').join(' ');
    const to = cases[key];
    cb(key, arrayedCases[key], { spaces, to });
  });
};
