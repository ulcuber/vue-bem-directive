// @flow
export function filterClasses(arr: string[], oldClasses: string[]): string[] {
  return arr.filter(name => oldClasses.indexOf(name) === -1);
}

export default function applyClasses(el: HTMLElement, classes: string[], oldClasses: string[]) {
  const elClasses: string[] = el.className.split(' ');


  /* eslint-disable-next-line no-param-reassign */
  el.className = filterClasses(elClasses, oldClasses)
    .concat(classes)
    .join(' ')
    .trim();
}
