// eslint-disable-next-line
export default function cleanSet(set, startString) {
  let outcome = '';
  if (!startString || !startString.length) return outcome;
  for (const elmnt of set) {
    if (elmnt && elmnt.startsWith(startString)) {
      outcome += `${elmnt.slice(startString.length)}-`;
    }
  }
  return outcome.slice(0, outcome.length - 1);
}
