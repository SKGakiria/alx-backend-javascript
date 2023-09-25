export default function appendToEachArrayValue(array, appendString) {
  const nwArray = [];

  for (const val of array) {
    nwArray.push(appendString + val);
  }

  return nwArray;
}
