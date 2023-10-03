function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of items) {
    if (quantity === 1) {
      items.set(item, 100);
    }
  }
  return items;
}

export default updateUniqueItems;
