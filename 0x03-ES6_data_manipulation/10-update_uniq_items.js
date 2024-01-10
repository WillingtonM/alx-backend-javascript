export default function updateUniqueItems(map) {
  if (m instanceof Map) {
    for (const [key, value] of m) {
      if (value === 1) {
        m.set(key, 100);
      }
    }

    return m;
  }

  throw new Error('Cannot process');
}
