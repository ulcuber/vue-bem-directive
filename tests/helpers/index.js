export {
  block, element, mod, value,
} from './cases';
export { default as eachCase } from './eachCase';

export const replaceInArray = (arr, needle, newElement) => arr.map(
  (element) => (element.replace(needle, newElement)),
);
