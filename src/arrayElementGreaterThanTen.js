export default function arrayElementGreaterThanTen(array) {
  if (Array.isArray(array)) {
    return array.some(number => number > 10);
  }
  return false;
}
