export function isLeap(year: number): boolean {
  if (!(year % 4)) {
    if (!(year % 100 || year % 400)) {
      return true;
    } else if (!(year % 100) && year % 400) {
      return false;
    } else {
      return true;
    }
  }
  return false;
}
