export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  const data = weakMap.get(endpoint) || 0;

  if (data >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, data + 1);
};
