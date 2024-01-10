const weakM = new WeakMap();

const queryAPI = (endpoint) => {
  let tot = weakM.get(endpoint) || 0;
  weakM.set(endpoint, tot -= -1);
  if (tot >= 5) throw new Error('Endpoint load is high');
  return tot;
};

export { weakM, queryAPI };
