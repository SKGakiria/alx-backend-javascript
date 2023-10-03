function cleanSet(set, startString) {
  const setValues = [...set].filter((value) => value.startsWith(startString));
  const newString = setValues.join('-');
  return newString;
}

export default cleanSet;
