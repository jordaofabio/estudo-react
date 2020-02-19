export default (arr, func) => {
  if (typeof func !== 'function') {
    throw new TypeError('fun is not a function');
  }
  return arr.map((item, index) => func(item, index));
};
