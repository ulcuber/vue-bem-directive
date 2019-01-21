// @flow
export function isEquals(a: mixed, b: mixed): boolean {
  if (!a || !b) return false;
  if (typeof a === 'string' && typeof b === 'string') {
    return a === b;
  }
  if (typeof a === 'object' && typeof b === 'object') {
    const keys = Object.keys(a);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export function extractValueClasses(
  classes: string[],
  oldClasses: string[],
  value: any,
  prefix: string,
): void {
  if (typeof value === 'object' && value !== null) {
    Object.keys(value).forEach((key) => {
      if (value[key]) {
        classes.push(prefix + key);
      } else {
        oldClasses.push(prefix + key);
      }
    });
  } else if (typeof value === 'string' && value.length > 0) {
    classes.push(prefix + value);
  }
}
