export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const bffr = new ArrayBuffer(length);
  const view = new Int8Array(bffr);
  view.set([value], position);
  return new DataView(bffr);
}
