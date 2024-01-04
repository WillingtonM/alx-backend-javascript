/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const my_array = [];
  for (const i of array) {
    my_array.push(appendString + i);
  }

  return my_array;
}
