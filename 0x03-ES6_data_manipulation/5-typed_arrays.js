function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const int8Array = new Int8Array(length);
  int8Array[position] = value;

  return new DataView(int8Array.buffer);
}

export default createInt8TypedArray;
