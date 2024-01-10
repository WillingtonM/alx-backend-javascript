/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let vrdct = true;
  list.map((x) => {
    if (!set.has(x)) {
      vrdct = false;
    }
  });

  return vrdct;
}
